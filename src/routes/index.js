const {Router} = require('express')
const productRoutes = require('./productRoutes/product.routes')

const router = Router()



router.use('/',productRoutes)

module.exports = router