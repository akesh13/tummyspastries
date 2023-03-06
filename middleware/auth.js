const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization");

    jwt.verify(token, process.env.ACC_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(400).json({ msg: "Invalid Token" });

      req.user = user;
      next();
    });
  } catch (err) {
    return res.status(500).json({ msg: "Invalid Authorization" });
  }
};

module.exports = authMiddleware;
