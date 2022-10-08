const { Router } = require("express");
const {postOrder, notification} = require("../../controllers/mercagoPago.controller")

const router = Router()

router.post('/post-order', postOrder)
router.post('/notification', notification)


module.exports = router