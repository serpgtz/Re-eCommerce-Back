const { Router } = require("express");
const productRoutes = require("./productRoutes/product.routes");
const userRoutes = require("./userRoutes/user.routes");

const router = Router();

router.use("/", productRoutes);
router.use("/", userRoutes);

module.exports = router;
