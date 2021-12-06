const Cart = require("../../models/cart.model");

const getCartById = async (req, res) => {
    try {
        const cartId = req.cartId
        let cart = await Cart.findById(cartId).populate("cartItem");
        res.json({ cart })
    } catch (err) {
        next(err);
    }
}

module.exports = getCartById;