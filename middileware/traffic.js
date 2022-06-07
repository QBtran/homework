const countObject = [
  { user: "alice", student: 0, teacher: 0, subject: 0 },
  { user: "bob", student: 0, teacher: 0, subject: 0 },
  { user: "charlie", student: 0, teacher: 0, subject: 0 },
];

function countVisitNumber(req, res) {
  countObject.forEach((el) => {
    if (el.user === req.body.username && req.baseUrl === "/students") {
      el.student++;
    } else if (el.user === req.body.username && req.baseUrl === "/teachers") {
      el.teacher++;
    } else if (el.user === req.body.username && req.baseUrl === "/subjects") {
      el.subject++;
    }
  });
  console.log(countObject);
}

module.exports = countVisitNumber;
