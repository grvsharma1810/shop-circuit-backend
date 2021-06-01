const express = require("express");
const createWishlistItem = require("../controllers/wishlistItem/createWishlistItem");
const deleteWishlistItem = require("../controllers/wishlistItem/deleteWishlistItem");

const router = express.Router();

router.post("/", createWishlistItem);

router.delete("/:wishlistItemId", (req, res, next) => {
    req.wishlistItemId = req.params.wishlistItemId
    next()
}, deleteWishlistItem)

module.exports = router