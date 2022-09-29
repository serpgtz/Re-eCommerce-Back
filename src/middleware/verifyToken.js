const jwt = require("jsonwebtoken");
const User = require("../models/User")

const verifyToken = async (req, res, next) => {

    const token = req.header('Bearer')

    if(!token) return res.status(400).json({error : true, msg: 'acceso denegado'})


 try {
    
    const verify = jwt.verify(token , process.env.JWT_SEC)
    const user = await User.findById(verify.id)
     const userFront = {
        name : user.username,
        email : user.email,
        admin : user.admin
     }
     
    req.user = userFront
      next()

 } catch (error) {
    const e = new Error ('Token no valido')
    return res.status(403).json({msg: e.message})
 }
    


};

module.exports = verifyToken;
