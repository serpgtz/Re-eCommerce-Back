const {Router} = require('express')
const {postProduct, getProduct, updateProduct} = require('../../controllers/products.controller')


const router = Router()

router.post('/product', postProduct)
router.get('/products', getProduct )
router.put('/product', updateProduct)

module.exports = router