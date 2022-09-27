const mongoose = require('mongoose')


const UserSchema = mongoose.Schema({
    name : {
        type : String, //minLength(3),
        required : true,
    },

    email : {
        type : String,
        Uniquie : true,
        required : true,
        
    },
    password : {
        type : String,
        required : true,
    },
    admin : {
        type : Boolean,
        required : true,
        default: false
    },

  
})

const User = mongoose.model('User', UserSchema)

module.exports = User