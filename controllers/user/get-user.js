const User = require("../../models/user.model");

const getUser = async (req, res) => {
    try {
        const userId = req.userId;
        const user = await User.findById(userId);
        user.password = undefined;
        res.status(200).json({ success: true, user })
    } catch (err) {
        next(err);
    }
}

module.exports = getUser;