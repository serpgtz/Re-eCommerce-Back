const { Router } = require("express");
const productRoutes = require("./productRoutes/product.routes");
const userRoutes = require("./userRoutes/user.routes");
const login = require("./login/login.routes")

const router = Router();

router.use("/", productRoutes);
router.use("/", userRoutes);
router.use("/", login)
module.exports = router;
