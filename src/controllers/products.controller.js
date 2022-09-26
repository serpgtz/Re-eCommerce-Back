const Product = require('../models/Product')

const postProduct = async (req, res) => {

    
    try {
        
        const product =  new Product (req.body)
        const productSave = await product.save()
        
        res.status(200).json(productSave)
    } catch (error) {
        console.log(error)
    }
}

const getProduct = async (req, res) => {
 
    try {
        const products = await Product.find()

        res.status(200).json(products)
    } catch (error) {
        console.log(error)
    }
}


module.exports = {postProduct,
 getProduct
}