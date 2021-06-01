const Wishlist = require("../../models/wishlist.model");
const WishlistItem = require("../../models/wishlistItem.model");

const createWishlistItem = async (req, res) => {
    try {
        const wishlistId = req.wishlistId;
        const { product } = req.body;
        console.log({ wishlistId, product });
        let wishlistItem = new WishlistItem({ product, wishlistId });
        await wishlistItem.save();
        wishlistItem = await wishlistItem.populate("product").execPopulate();
        const wishlist = await Wishlist.findById(wishlistId);
        wishlist.wishlistItems.push(wishlistItem._id);
        await wishlist.save();
        res.status(201).json({ success: true, wishlistItem });
    } catch (err) {
        next(err);
    }
}

module.exports = createWishlistItem;