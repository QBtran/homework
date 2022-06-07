const express = require("express");
const studentRouter = express.Router();

const students = [
  {
    id: 1,
    name: "QB",
    age: 13,
  },
  {
    id: 2,
    name: "BQ",
    age: 14,
  },
  {
    id: 3,
    name: "BB",
    age: 15,
  },
];

studentRouter.post("", (req, res, next) => {
  console.log("Successfully access to students router");
  res.json(students);
  next();
});

module.exports = studentRouter;
