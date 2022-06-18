const { JsonWebTokenError } = require("jsonwebtoken");
const jwtKey = require("../constants/key");
const User = require("../constants/User");

function authenMdw(req, res, next) {
  const token = req.headers.authorization.split("")[1];
  const decode = jwt.verify(token, jwtKey);
  if (decode) {
    const index = User.findIndex(
      (el) => decode.name === el.name && decode.password === el.password
    );
    if (index < 0) {
      res.json("User is not exit");
    }
    next();
  }
  res.json("JWT is invalid");
  res.status(401);
  return;
}
module.exports = authenMdw;
