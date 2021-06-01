const Cart = require("../../models/cart.model");
const CartItem = require("../../models/cartItem.model");

const createCartItem = async (req, res) => {
    try {
        const cartId = req.cartId;
        const { product, quantity } = req.body;
        console.log({ cartId, product, quantity });
        let cartItem = new CartItem({ product, quantity, cartId });
        await cartItem.save();
        cartItem = await cartItem.populate("product").execPopulate();
        const cart = await Cart.findById(cartId);
        cart.cartItems.push(cartItem._id);
        await cart.save();
        res.status(201).json({ cartItem });
    } catch (err) {
        next(err);
    }
}

module.exports = createCartItem;