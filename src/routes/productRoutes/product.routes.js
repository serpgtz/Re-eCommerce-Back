const {Router} = require('express')
const {postProduct, getProduct, updateProduct, deleteProduct , getProductId} = require('../../controllers/products.controller')


const router = Router()

router.post('/product', postProduct)
router.get('/products', getProduct )
router.get('/product/:id',getProductId)
router.put('/product', updateProduct)
router.delete('/product/:id', deleteProduct)


module.exports = router