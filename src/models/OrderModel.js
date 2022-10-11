const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId, 
        required : true,
        ref: "User",
    },

 
    orderItems:[
        {
            name: { type: String, required: true},
            qty: { type: Number, required: true},
            image: {type: String, required: true},
            price: { type:Number, required: true},
            product: {
                type: mongoose.Schema.Types.ObjectId,
                required : true,
                ref: "Product",
            },
        },
    ],
    // shippingAddress:{
    //     Addres:{ type: String, required : true},
    //     city:{ type: String, required : true},
    //     postalCode: { type: String, required : true}
    //     //country¿?
    // },
    PaymentMethod:{
        type: String,
        default: 'MercadoPago'
    },

    status : {
        type:String,
        default : 'Pending'
    },

    email_address : {
        type: String
    },
    shippingPrice:{
        type: Number,
        required : true,
        default: 0.0
    },
    //impuestos¿? --- comision¿?
    totalPrice:{
        type: Number,
        required : true,
        default: 0.0
    },
    isPaid: {
        type : Boolean,
        required: true,
        default: false
    },
    paidAt:{
        type: Date
    },
    isDelivered:{
        type : Boolean,
        required: true,
        default: false
    },
    delivered:{
        type: Date
    }
})
const OrderModel = mongoose.model('OrderModel', orderSchema )

module.exports = OrderModel