const CartItem = require("../../models/cartItem.model");

// Lodash can be used here to update the cartItem
const updateCartItem = async (req, res) => {
    try {
        const { quantity } = req.body;
        const cartItemId = req.cartItemId
        let cartItem = await CartItem.findById(cartItemId);
        cartItem.quantity = quantity;
        await cartItem.save();
        res.status(200).json(req.body);
    } catch (err) {
        next(err);
    }
}

module.exports = updateCartItem;