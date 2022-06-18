const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { connectToDb, db } = require("./db");
app.use(bodyParser.json({ extended: true }));

app.get("/", (req, res) => {
  console.log("hello");
});

app.listen(3000, (err) => {
  if (err) {
    return;
  }
  console.log("This application is running on port 3000");
  connectToDb();
});
