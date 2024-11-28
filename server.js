require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/env", (req, res) => {
  res.json({
    OUTLOOK_EMAIL: process.env.OUTLOOK_EMAIL,
    SMTPJS_SECURE_TOKEN: process.env.SMTPJS_SECURE_TOKEN,
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
