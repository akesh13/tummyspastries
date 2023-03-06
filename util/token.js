const jwt = require("jsonwebtoken");

const refSec = "1233433sda324sfasdsaf@3$afdsafaafdadf*344";
const accSec = "afsdaAFDLead&*$asfdsafdjpolh2143dafd@";

const createRefToken = (user) => {
  return jwt.sign(user, process.env.REF_TOKEN_SECRET || refSec, {
    expiresIn: "1d",
  });
};

const createAccToken = (user) => {
  return jwt.sign(user, process.env.ACC_TOKEN_SECRET || accSec, {
    expiresIn: "1d",
  });
};

module.exports = { createAccToken, createRefToken };
