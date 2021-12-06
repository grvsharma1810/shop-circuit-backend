const Wishlist = require("../../models/wishlist.model");
const WishlistItem = require("../../models/wishlistItem.model");

const deleteWishlistItem = async (req, res) => {
    try {
        const wishlistId = req.wishlistId;
        const wishlistItemId = req.wishlistItemId
        await WishlistItem.findByIdAndDelete(wishlistItemId);
        const wishlist = await Wishlist.findById(wishlistId);
        wishlist.wishlistItems.splice(wishlist.wishlistItems.findIndex(wishlistItem => wishlistItem === wishlistItemId), 1)
        await wishlist.save();
        res.status(200).json({ deleted: wishlistItemId });
    } catch (err) {
        next(err);
    }
}

module.exports = deleteWishlistItem;