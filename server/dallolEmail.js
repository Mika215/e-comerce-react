require("dotenv").config();
const nodemailer = require("nodemailer");
const {google} = require("googleapis");
// const { gmail } = require("googleapis/build/src/apis/gmail");

const CLIENT_ID = process.env.GMAILER_CLIENT_ID;
const CLIENT_SEC = process.env.GMAILER_CLIENT_SEC;
const REDIRECT_URI = process.env.GMAILER_REDIRECT_URI;
const Gmail_Ref_Token = process.env.GMAILER_REFRESH_TOKEN;

//trasporter
const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SEC,
  REDIRECT_URI
);
oAuth2Client.setCredentials({refresh_token: Gmail_Ref_Token});

 const sendMail = async (mailOptions) => {
  try {
    const gaccessToken = await oAuth2Client.getAccessToken();
    //Transport
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "mikacodes@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SEC,
        refreshToken: Gmail_Ref_Token,
        accessToken: gaccessToken,
      },
    });

    // const mailOptions = {
    //   from: "DallolMart || <mikacodes@gmail.com>",
    //   to: "mikalsoyra@gmail.com",
    //   subject: "Mika Sending email from DallolMart",
    //   text: "This message could have been sent after the dallolmart server instantly restarted",
    //   html: `<h2>This message was sent from the DallolMart Server(ESP)</h2>
    // <p>More customised body message with HTML elements</p>
  

    // <strong>Best Regards</strong>
    // <p>Michael Tesfay<p>
    // <strong>DallolMart</strong>
    // `,
    // };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
};

// sendMail()
//   .then((result) => console.log("Email sent...", result))
//   .catch((err) => console.log(error.message));

  module.exports=sendMail