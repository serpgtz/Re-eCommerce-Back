const { Router } = require("express");
const {
  postReview,
  getAllReviews,
  deleteReview,
} = require("../../controllers/review.controller");

const router = Router();
//CREAR
router.post("/product/:productId/:userId/review", postReview);
//TRAER TODAS
router.get("/reviews", getAllReviews);
//TRAER POR PRODUCTO
router.get("/product/:productId/:reviewId", getAllReviews);
//TRAER POR USER
router.get("/user/:userId/reviews", getAllReviews);
//BORRAR DESDE DETAIL
router.delete("/product/:productId/:reviewId", deleteReview);
//BORRAR DESDE ADMIN
router.delete("/review/:reviewId", deleteReview);

module.exports = router;
