const User = require("../models/User");
const CryptoJS = require("crypto-js");
const generarJWT = require("../helper/generateJWT");
//REGISTRAR USUARIO
const registerPost = async (req, res) => {
  const { username, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists)
    return res.status(400).json({ error: true, msg: "usuario ya registrado" });
  try {
    const encriptPassword = CryptoJS.AES.encrypt(
      password,
      process.env.SECURITY_PASS
    );
    const user = new User({ username, email, password: encriptPassword });
    const userSave = await user.save();

    res.status(200).json(userSave);
  } catch (error) {
    console.log(error);
  }
};
//CONFIRMAR USUARIO
const confirmUser = () => {};
//AUTENTICAR USUARIO
const authenticate = async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  !user && res.status(401).send("¡Usuario no existe!");
  if (user.confirmed === false) {
    return res.status(401).send("¡Usuario no confirmado!");
  } else {
    const hashPass = CryptoJS.AES.decrypt(
      user.password,
      process.env.SECURITY_PASS
    );
    const originalPassword = hashPass.toString(CryptoJS.enc.Utf8);
    const inputPass = req.body.password;
    originalPassword !== inputPass
      ? res.status(401).json({ msg: "¡Password inválido!" })
      : res.status(200).json({
          token: generarJWT(user.id),
          error: false,
          msg: "Usuario habilitado para loguearse",
        });
  }
};

const changePassword = async (req, res) => {
  const inputPass = req.body.password;

  const hashPass = CryptoJS.AES.encrypt(inputPass, process.env.SECURITY_PASS);
  const oldPass = await User.findOne({
    password: CryptoJS.AES.decrypt(
      req.body.password,
      process.env.SECURITY_PASS
    ),
  });
  if (hashPass === oldPass) {
    const newPass = CryptoJS.AES.decrypt(
      req.body.password,
      process.env.SECURITY_PASS
    );
    const updatedPassword = await User.findByIdAndUpdate(
      req.params.token,
      {
        $password: newPass,
      },
      { new: true }
    );
    res.status(200).json(updatedPassword);
    return res.status(200).json();
  } else {
    res.status(500).json({ error: true, msg: "Contraseña incorrecta" });
  }
};

const forgotPassword = () => {};

module.exports = {
  registerPost,
  confirmUser,
  authenticate,
  changePassword,
  forgotPassword,
};
