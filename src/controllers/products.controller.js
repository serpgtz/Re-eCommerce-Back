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

const updateProduct = async (req, res) => {

    // recibo la id del producto
     const {_id , name , price , description , stock , image  } = req.body
    try {
        const productMatch = await Product.findById(_id)
          productMatch.name = name
          productMatch.price = price
          productMatch.description = description
          productMatch.stock = stock
          productMatch.image = image
          const update =  await  productMatch.save()

        res.status(200).json(update)

    } catch (error) {
        console.log(error)
    }
}

const deleteProduct = async (req, res) => {
    const _id = req.params._id


    try {
        
        const productMatch = await Product.deleteOne(_id)
         res.json(productMatch)

    } catch (error) {
        console.log(error)
    }
}


module.exports = {postProduct,
 getProduct , updateProduct, deleteProduct
}