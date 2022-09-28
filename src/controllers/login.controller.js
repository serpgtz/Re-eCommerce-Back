const User = require("../models/User");
const CryptoJS = require("crypto-js");
const generarJWT = require("../helper/generateJWT");

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


const forgotPassword = () => {};

module.exports = {
  registerPost,
  confirmUser,
  authenticate,
  changePassword,
  forgotPassword,
};
