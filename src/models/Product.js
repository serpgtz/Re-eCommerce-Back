const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    rating: {
        type: Number,
        required: true,
    },
    comment : {
        type : String,
        required : true,
        default: "Any Comments"
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        require:true,
        ref: "User",
    }

})


const productsShema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    rating: {
        type: Number,
        required: true,
        default: 0
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
    reviews:[
        reviewSchema
    ],
    numReviews:{
        type: Number,
        required: true,
        default: 0
    },
    exists :{
        type : Boolean,
        default : true,
    },
    arrayImag:[{
        type : String,
        required: false
    }]

})

const Product = mongoose.model('Product', productsShema )

module.exports = Product