const mongoose = require("mongoose");

const CartItemSchema = new mongoose.Schema({    
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number },
    cartId: { type: mongoose.Schema.Types.ObjectId }
})

const CartItem = mongoose.model("CartItem", CartItemSchema);

module.exports = CartItem;