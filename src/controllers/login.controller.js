const User = require("../models/User");

const registerPost = () => {};

const confirmUser = () => {};

const authenticate = async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  !user && res.status(401).send("¡Usuario no existe!");
  !user.confirmado && res.status(401).send("¡Usuario no confirmado!");
  const hashPass = CryptoJS.AES.decrypt(
    user.password,
    process.env.SECURITY_PASS
  );
  const originalPassword = hashPass.toString(CryptoJS.enc.Utf8);
  const inputPass = req.body.password;
  originalPassword !== inputPass
    ? res.status(401).json({ msg: "¡Password inválido!" })
    : res
        .status(200)
        .json({ error: false, msg: "Usuario habilitado para loguearse" });
};

const changePassword = () => {};

const forgotPassword = () => {};

module.exports = {
  registerPost,
  confirmUser,
  authenticate,
  changePassword,
  forgotPassword,
};
