const Review = require("../models/Review");
const User = require("../models/User");

const postReview = async (req, res) => {
  const { productId, userId } = req.params;
  console.log(productId, "Tengo el poder", userId);
  if (productId && userId) {
    try {
      const review = new Review(req.body);
      const reviewSave = await review.save();

      return res.status(201).json(reviewSave);
    } catch (error) {
      console.log(error);
    }
  }
};
const getAllReviews = async (req, res) => {
  const { productId, userId, reviewId } = req.params;
  try {
    const reviews = await Review.find();
    if (productId && userId && reviewId) {
      const review = await Review.findById(reviewId);
      if (review !== []) {
        return res.status(200).json(review);
      } else {
        return res.status(404).send(`Review no existente`);
      }
    }
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).send(error);
  }
};
const deleteReview = async (req, res) => {
  const _id = req.params.reviewId;

  try {
    // no se elimina de la bdd pero si tendra la propiedad existe : false
    const reviewMatch = await Review.findById(_id);

    reviewMatch.exists = false;

    const update = await reviewMatch.save();
    return res.status(200).json(update);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  postReview,
  getAllReviews,
  deleteReview,
};
