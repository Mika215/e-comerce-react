const router = require("express").Router();
const User = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWTKey = process.env.JWT_SEC_KEY;
const {
  verifyTokenAndAuth,
  verifyTokenAndAdmin,
  verifyToken
} = require("../Middleware/verifyToken");



//register new user
// ! generator console.log(require('crypto').randomBytes(64).toString('hex'))
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      password: hashedPassword,
      email: req.body.email,
      firstName: req.body.firstName,
    });
    const savedUser = await newUser.save();
    res
      .status(200)
      .send(`new user saved sucsessfully! => : ${savedUser.firstName}`);
    console.log(savedUser);
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
});

//login
router.post("/login", async (req, res) => {
  const {username, password} = req.body;
  const user = await User.findOne({username});
  if (user === null) {
    res.status(404).send("can not find user");
  }
  try {
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        {id: user.id, username: user.username, isAdmin: user.isAdmin},
        JWTKey,
        {expiresIn: "1h"}
      );

      const {password, ...others} = user._doc; // !this returns us back only the user without password /cause mongoDB stores the infor inside _doc
      res.status(200).send(` ${user.username}: loged in suceess! ${token}`);
      console.log(others);
    } else {
      res.status(403).send("username and password doesn't match!");
    }
  } catch (error) {
    console.log(error);
  }
});

//update user
router.put("/:id", verifyTokenAndAuth, async (req, res) => {
  if (req.body.password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {new: true}
    );
    res.status(200).send(updatedUser);
    console.log(updatedUser);
    console.log(`${updatedUser.username} : edited`);
  } catch (err) {
    res.status(500).send(err);
  }
});

//delete user

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send(`user permanently deleted..`);
  } catch (err) {
    res.status(500).send(err);
  }
});

//find user by id

router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    const {password, ...others} = user._doc;
    res.status(200).send(others);
  } catch (err) {
    res.status(500).send(err);
  }
});
//get all users
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new;

  try {
    //! we can search users based on query if there is no query then it returns all users in the db.
    const users = query
      ? await User.find().sort({_id: -1}).limit(5)
      : await User.find();

    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Get user statistics

router.get("/stats", verifyTokenAndAdmin,async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
console.log(lastYear)
  try {
    const data = await User.aggregate([
      {$match: {createdAt: {$gte: lastYear}}},
      {
        $project:{
          month:{$month:"$createdAt"},
        },
      },
      {
        $group:{
          _id:"$month",
          total:{$sum:1},
        },
      },
    ]);
    res.status(200).send(data)
  } catch (err) {
    res.status(500).send(err)
  }
});

module.exports = router;
