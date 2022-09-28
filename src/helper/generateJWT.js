const jwt = require("jsonwebtoken");

const generarJWT = (id) =>
  jwt.sign(
    {
      id,
    },
    process.env.JWT_SEC,
    { expiresIn: "3d" }
  );

module.exports = generarJWT;
