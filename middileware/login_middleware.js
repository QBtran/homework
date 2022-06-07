const users = [
  { username: "alice", apiKey: "alice@123" },
  { username: "bob", apiKey: "bob@123" },
  { username: "charlie", apiKey: "charlie@123" },
];

function loginMiddleware(req, res, next) {
  const findIndex = users.findIndex((ele) => {
    return JSON.stringify(ele) === JSON.stringify(req.body);
  });

  const isAuthorized = findIndex >= 0;
  if (!isAuthorized) {
    res.status(401);
    res.json("Unauthorized");
    return;
  }

  next();
}

module.exports = loginMiddleware;
