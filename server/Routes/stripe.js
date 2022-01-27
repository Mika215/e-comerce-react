const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_SEC_KEY);

//charge payment

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).send(stripeErr);
      } else {
        console.log(`New stripe payment has been made on ${new Date().toString().substring(0, 30)}`);
        res.status(200).send(stripeRes);
      }
    }
  );
});

module.exports = router;
