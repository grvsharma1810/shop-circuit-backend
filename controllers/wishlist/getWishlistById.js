const Wishlist = require("../../models/wishlist.model");

const getWishlistById = async (req, res) => {
    try{
        const wishlistId = req.wishlistId
        let wishlist = await Wishlist.findById(wishlistId).populate("wishlistItem");
        res.json({wishlist})
    } catch(err){
        next(err);
    }
}

module.exports = getWishlistById;