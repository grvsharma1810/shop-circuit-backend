const mongoose = require("mongoose");

const WishlistSchema = new mongoose.Schema({
    user: { type: mongoose.SchemaTypes.ObjectId, ref: 'User', required: ["Can't add without userId"], index: true },
    wishlistItems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'WishlistItem' }],
})

const Wishlist = mongoose.model("Wishlist", WishlistSchema);

module.exports = Wishlist;