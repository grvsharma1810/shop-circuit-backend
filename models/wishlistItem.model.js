const mongoose = require("mongoose");

const WishlistItemSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number },
    wishlistId: { type: mongoose.Schema.Types.ObjectId }
})

const WishlistItem = mongoose.model("WishlistItem", WishlistItemSchema);

module.exports = WishlistItem;