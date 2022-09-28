const User = require('../models/User')
const CryptoJS = require('crypto-js')


const registerPost = async (req, res) => {
    const {username, email, password} = req.body
     
    const userExists = await User.findOne({email})
        console.log(userExists)
    if(userExists) return res.status(400).json({error : true , msg: 'usuario ya registrado'})
    try { 
        
        const encriptPassword =  CryptoJS.AES.encrypt(password, process.env.SECURITY_PASS)
        const user = new User({username, email ,password: encriptPassword })
        const userSave = await user.save()

        res.status(200).json(userSave)
    } catch (error) {
        console.log(error)
    }
}

const confirmUser = () => {

}

const authenticate = () => {

}

const changePassword = () => {

}

const forgotPassword = () => {

}


module.exports = {
    registerPost,
    confirmUser,
    authenticate,
    changePassword,
    forgotPassword,
}