const {Router} = require('express')
const verifyToken = require('../../middleware/verifyToken')
const {perfil} = require('../../controllers/user.controllers')


const router = Router()


router.get('/perfil',verifyToken, perfil )

module.exports = router