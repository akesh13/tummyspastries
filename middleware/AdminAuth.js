const Auth = require("../model/authModel");

const adminAuth = async (req, res, next) => {
  try {
    const user = await Auth.findOne({
      _id: req.user.id,
    });

    if (user.role !== "superadmin")
      return res.status(400).json({ msg: "Access denied for non-admin user" });

    next();
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = adminAuth;
