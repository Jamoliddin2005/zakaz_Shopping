const { verifyToken } = require("../TokenCreater");

module.exports = async (req, res, next) => {
  const verify = await verifyToken(req.headers.authorization);
  if (verify.name !== "JsonWebTokenError") {
    next();
  } else {
    return res.json("Token is expired!");
  }
};
