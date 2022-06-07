const express = require("express");
const teacherRouter = express.Router();

const teachers = [
  {
    id: 1,
    name: "TB",
    age: 30,
  },
  {
    id: 2,
    name: "BT",
    age: 29,
  },
  {
    id: 3,
    name: "TT",
    age: 25,
  },
];

teacherRouter.post("", (req, res, next) => {
  console.log("Successfully access to teachers router");
  res.json(teachers);
  next();
});

module.exports = teacherRouter;
