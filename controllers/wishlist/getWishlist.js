const Wishlist = require("../../models/wishlist.model");

const getWishlist = async (req, res, next) => {
    try {
        const userId = req.userId;
        let wishlist = await Wishlist.findOne({ user: userId }).populate("wishlistItems");
        wishlist = await wishlist.populate("wishlistItems.product").execPopulate();
        res.status(200).json({ wishlist });
    } catch (err) {
        next(err);
    }
}

module.exports = getWishlist;