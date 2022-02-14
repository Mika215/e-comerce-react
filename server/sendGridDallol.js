// require("dotenv").config();
const sendGridMailer = require('@sendgrid/mail')
// const SendGrid_API_KEY = process.env.SEND_GRID_API_KEY;


sendGridMailer.setApiKey("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");

// console.log(process.env.SENDGRID_API_KEY)
const msg = {
  to: "mikalsoyra@gmail.com",
  from: "mikacodes@gmail.com>",
  subject: "Hello from SendGrid",
  text: "Testing Email from SendGrid",
  html: "<strong>Hello from SendGrid</strong>",
};

// sendGridMailer
//   .send(msg)
//   .then((response) => console.log("Email Sent..."))
//   .catch((error) => console.log(error.message));

  sendGridMailer
  .send(msg)
  .then(() => {
    console.log('Email sent...')
  })
  .catch((error) => {
    console.error(error)
  })
