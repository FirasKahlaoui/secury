const express = require("express");
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

app.get("/env", (req, res) => {
  res.json({
    OUTLOOK_EMAIL: process.env.OUTLOOK_EMAIL,
    SMTPJS_SECURE_TOKEN: process.env.SMTPJS_SECURE_TOKEN,
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
