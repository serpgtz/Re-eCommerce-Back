const {Router} = require('express')
const {postProduct, getProduct, updateProduct, deleteProduct} = require('../../controllers/products.controller')


const router = Router()

router.post('/product', postProduct)
router.get('/products', getProduct )
router.put('/product', updateProduct)
router.delete('/product/:id', deleteProduct)

module.exports = router