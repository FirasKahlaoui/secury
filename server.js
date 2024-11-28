const express = require("express");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const app = express();
const port = 3000;
require("dotenv").config();

// Enable CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());

app.get("/env", (req, res) => {
  res.json({
    GMAIL_EMAIL: process.env.GMAIL_EMAIL,
  });
});

app.post("/send-verification-email", async (req, res) => {
  const { email, verificationCode } = req.body;

  const oAuth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
  );

  oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

  try {
    const accessToken = await oAuth2Client.getAccessToken();

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.GMAIL_EMAIL,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken.token,
      },
    });

    let mailOptions = {
      from: process.env.GMAIL_EMAIL,
      to: email,
      subject: "Your Verification Code",
      text: `Your verification code is ${verificationCode}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send("Verification email sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending verification email.");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
