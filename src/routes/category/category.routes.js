const { Router } = require("express");

const{getFilterbyQuery, postCategory} = require('../../controllers/category.controller')

const router = Router()

router.post('/category', postCategory )
router.get('/category', getFilterbyQuery)

module.exports = router;
