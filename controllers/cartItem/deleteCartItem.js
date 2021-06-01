const Cart = require("../../models/cart.model");
const CartItem = require("../../models/cartItem.model");

const deleteCartItem = async (req, res) => {
    try {
        const cartId = req.cartId;
        const cartItemId = req.cartItemId
        await CartItem.findByIdAndDelete(cartItemId);
        const cart = await Cart.findById(cartId);
        cart.cartItems.splice(cart.cartItems.findIndex(cartItem => cartItem === cartItemId), 1)
        await cart.save();
        res.status(200).json({ deleted: cartItemId });
    } catch (err) {
        next(err);
    }
}

module.exports = deleteCartItem;