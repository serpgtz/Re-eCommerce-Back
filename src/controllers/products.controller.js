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


module.exports = {postProduct}