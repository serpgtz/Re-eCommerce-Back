const { Router } = require("express");

const { getFilterbyQuery, postCategory, getBrand } = require('../../controllers/category.controller')

const router = Router()

router.post('/category', postCategory)
router.get('/category', getFilterbyQuery)
router.get('/category/brand', getBrand)

module.exports = router;
