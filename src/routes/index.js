const {Router} = require('express')
const {postProduct} = require('../controllers/products.controller')

const router = Router()

router.get('/', (req, res)=> {
    res.send('working')
})

router.post('/product', postProduct)

module.exports = router