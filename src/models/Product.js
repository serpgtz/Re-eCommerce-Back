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

    countInStock : {
        type : Number,
        required: true,
        default: 0
    },

    image : {
        type : String,
        required : true,
       
    },
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    numReviews:{
        type: Number,
        required: true,
        default: 0
    }
})

const Product = mongoose.model('Product', productsShema )

module.exports = Product