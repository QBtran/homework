const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Students = require("./constants/Students");
const User = require("./constants/User");
const stuRouter = require("./router/stu");
const loginRouter = require("./router/login");
const authenMdw = require("./middleware/authen_middleware");

app.get("/", (req, res) => {
  //   res.json("hello");
  res.json(Students);
  res.json(User);
});

app.use("/student", stuRouter);
app.use("/login", authenMdw, loginRouter);

app.listen(3000, () => {
  console.log("hello");
});
