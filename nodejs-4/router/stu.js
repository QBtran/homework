const express = require("express");
const stuRouter = express.Router();
const Students = require("../constants/Students");

stuRouter.get("/", (req, res) => {
  res.json(Students);
});
module.exports = stuRouter;
