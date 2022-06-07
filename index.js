const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json({ extended: true }));

const studentRouter = require("./router/students");
const teacherRouter = require("./router/teachers");
const subjectRouter = require("./router/subjects");

const loggingMiddleware = require("./middleware/logging_middleware");
const loginMiddleware = require("./middleware/login_middleware");
const countVisitNumber = require("./middleware/traffic");

app.use(
  "/students",
  loggingMiddleware,
  loginMiddleware,
  studentRouter,
  countVisitNumber
);

app.use(
  "/teachers",
  loggingMiddleware,
  loginMiddleware,
  teacherRouter,
  countVisitNumber
);

app.use(
  "/subjects",
  loggingMiddleware,
  loginMiddleware,
  subjectRouter,
  countVisitNumber
);

app.listen(3000, (err) => {
  if (err) {
    return;
  }
  console.log("This application is running on port 3000");
});
