const {Router} = require('express')
const {postProduct, getProduct} = require('../controllers/products.controller')

const router = Router()

router.get('/', (req, res)=> {
    res.send('working')
})

router.post('/product', postProduct)
router.get('/products', getProduct )

module.exports = router