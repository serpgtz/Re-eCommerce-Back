const User = require("../models/User");
const CryptoJS = require("crypto-js");

const registerPost = async (req, res) => {
  const { username, email, password } = req.body;

  const userExists = await User.findOne({ email });
  console.log(userExists);
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
const confirmUser = async (req, res) => {
    const {token} = req.params
  
  try {
    const confirmedUser = await User.findOne({token})
    if(!confirmedUser){
      
        return res.status(400).json({msg: 'token no valido'})
    }else {

        confirmedUser.token = null
        confirmedUser.confirmed = true
        await confirmedUser.save()

        res.json({msg: 'usuario registrado correctamente'})
    }
  } catch (error) {
    console.log(error)
  }
};

const authenticate = async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  !user && res.status(401).send("¡Usuario no existe!");
  user.confirmed === false && res.status(401).send("¡Usuario no confirmado!");
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

const changePassword = () => {


};

const forgotPassword = () => {};

module.exports = {
  registerPost,
  confirmUser,
  authenticate,
  changePassword,
  forgotPassword,
};
