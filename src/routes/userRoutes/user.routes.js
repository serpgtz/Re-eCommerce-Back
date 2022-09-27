const { Router } = require("express");
const createNewUser = require("../../controllers/user.controller");
const router = Router();

router.post("/register", createNewUser);

module.exports = router;
