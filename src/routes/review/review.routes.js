const { Router } = require("express");
const {
  postReview,
  getAllReviews,
  deleteReview,
} = require("../../controllers/review.controller");

const router = Router();

router.post("/product/:productId/:userId/review", postReview);
router.get("/reviews", getAllReviews);
router.get("/product/:productId/:userId/review/:reviewId", getAllReviews);
router.delete("/product/:productId/:userId/review/:reviewId", deleteReview);

module.exports = router;
