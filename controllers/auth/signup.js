const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Cart = require('../../models/cart.model');
const User = require("../../models/user.model");
const Wishlist = require('../../models/wishlist.model');


const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        let user = { name, email };
        const salt = await bcrypt.genSalt(12);
        user.password = await bcrypt.hash(password, salt);
        user = new User(user);
        user = await user.save();
        user.password = undefined;
        const cart = new Cart({
            user: user._id,
            cartItems: []
        });
        cart.save();
        const wishlist = new Wishlist({
            user: user._id,
            wishlistItems: []
        });
        wishlist.save();        
        res.status(201).json({ success: true })
    } catch (err) {
        err.customMessage = "Unable to signup user"
        next(err);
    }
}

module.exports = signup;