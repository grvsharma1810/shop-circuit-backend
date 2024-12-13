const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
    user: { type: mongoose.SchemaTypes.ObjectId, ref: 'User', required: ["Can't add without userId"], unique: true },
    cartItems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CartItem' }],
})

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;