const express = require("express");
const getWishlist = require("../controllers/wishlist/getWishlist");
const getWishlistById = require("../controllers/wishlist/getWishlistById");
const updateWishlist = require("../controllers/wishlist/updateWishlist");

const router = express.Router();

router.get("/", (req, res, next) => {
  req.userId = req.query.userId;
  next()
}, getWishlist)

router.get("/:wishlistId", (req, res, next) => {
  req.wishlistId = req.params.wishlistId
  next()
}, getWishlistById)

router.post("/:wishlistId", (req, res, next) => {
  req.wishlistId = req.params.wishlistId
  next()
}, updateWishlist)

module.exports = router