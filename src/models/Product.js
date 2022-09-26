const mongoose = require('mongoose')



const productsShema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },

    price : {
        type : Number,
        required : true
    },

    description : {
        type: String,
        required : true
    },

    stock : {
        type : Number,
        required: true,
    },

    image : {
        type : String,
        required : true,
       
    },

    exits :{
        type : Boolean,
        default : true,
    },
   

})

const Product = mongoose.model('Product', productsShema )

module.exports = Product