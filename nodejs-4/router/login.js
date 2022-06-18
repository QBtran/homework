const express = require("express");
const loginRouter = express.Router;
const jwt = require("jsonwedtoken");
const jwtKey = require("../constants/key");
const User = require("../constants/User");

loginRouter.post("/", (req, res) => {
  const msgBody = req.body;

  const index = User.findIndex(
    (el) => el.name && req.body.password === el.password && req.body.password
  );
  const isUnAuthorize = index < 0;
  if (isUnAuthorize) {
    res.json("eo");
    res.status(401);
    return;
  }

  const token = jwt.sign(msgBody, jwtKey);
  res.json(token);
});
module.exports = loginRouter;
