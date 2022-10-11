const { Router } = require("express");
const {
  postReview,
  getAllReviews,
  deleteReview,
  getProductReviews,
  getUserReviews,
  getReview,
} = require("../../controllers/review.controller");

const router = Router();
//CREAR
router.post("/product/:productId/:userId/review", postReview);
//TRAER TODAS
router.get("/reviews", getAllReviews);
//TRAER UNA EN PARTICULAR
router.get("/review/:reviewId", getReview);
//TRAER POR PRODUCTO
router.get("/product/:productId/reviews", getProductReviews);
//TRAER POR USER
router.get("/user/:userId/reviews", getUserReviews);
//BORRAR DESDE DETAIL
router.delete("/product/:productId/review/:reviewId", deleteReview);
//BORRAR DESDE ADMIN
router.delete("/review/:reviewId", deleteReview);

module.exports = router;
