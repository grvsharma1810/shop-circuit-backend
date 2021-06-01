const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require("../../models/user.model");

const login = async (req, res) => {
    try {
        const userCredentials = {
            email: req.body.email,
            password: req.body.password
        }
        const user = await User.findOne({ email: userCredentials.email });
        if (!user) {
            res.status(404).json({ message: 'user does not exsist' })
        }
        const isMatch = await bcrypt.compare(userCredentials.password, user.password);
        if (!isMatch) {
            res.status(401).json({ message: "incorrect password" })
        }
        const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET_KEY, { expiresIn: '24h' })
        user.password = undefined;
        res.status(200).json({ success: true, user, token })
    } catch (err) {
        err.customMessage = "unable to login user";
        next(err);
    }
}

module.exports = login;