const Cart = require("../../models/cart.model");

const getCart = async (req, res) => {
    try {
        const userId = req.userId;
        let cart = await Cart.findOne({ user: userId }).populate("cartItems")
        cart = await cart.populate("cartItems.product").execPopulate();
        res.status(200).json({ cart })
    } catch (err) {
        next(err);
    }
}

module.exports = getCart;