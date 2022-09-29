const { Router } = require("express");
const productRoutes = require("./productRoutes/product.routes");
const userForAdminRoutes = require("./userForAdminRoutes/userForAdmin.routes");
const login = require("./login/login.routes")
const userRoutes = require("./user/user.routes")

const router = Router();

router.use("/", productRoutes);
router.use("/", userForAdminRoutes);
router.use("/",  userRoutes)
router.use("/", login)

module.exports = router;
