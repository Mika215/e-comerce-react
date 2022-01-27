const router = require("express").Router();
const Product = require("../Models/Product");
const {verifyTokenAndAdmin} = require("../Middleware/verifyToken");

//add new product
router.post("/add", verifyTokenAndAdmin, async (req, res) => {
  try {
    const newProduct = new Product(req.body);

    const savedProduct = await newProduct.save();
    res
      .status(200)
      .send(`new product saved sucsessfully! => : ${savedProduct.title}`);
    console.log(savedProduct);
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
});

//update product by id
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {new: true}
    );
    res.status(200).send(updatedProduct);
    console.log(updatedProduct);
    console.log(`${updatedProduct.title} : edited`);
  } catch (err) {
    res.status(500).send(err);
  }
});

//delete product by id

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).send(`Product permanently deleted..`);
  } catch (err) {
    res.status(500).send(err);
  }
});

//get single product by id

router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.status(200).send(product);
  } catch (err) {
    res.status(500).send(err);
  }
});
//get all products
router.get("/", async (req, res) => {
  const queryNew = req.query.new;
  //!query by category has some bugs chek it out agin
  const queryCategory = req.query.category;

  try {
    let products;
    if (queryNew) {
      products = await Product.find().sort({createdAt: -1}).limit(5);
    } else if (queryCategory) {
      products = await Product.find({
        catagories: {
          $in: [queryCategory],
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).send(products);
    console.log("new visitor:");
    console.log(`on ${new Date().toString().substring(0, 30)}`);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
