const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const authVerify = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        res.status(401).json({ message: "Un-authenticated Request" })
    }
    try{
        const tokenData = jwt.verify(token, process.env.JWT_SECRET_KEY)
        if (tokenData) {
            req.tokenData = tokenData;
            return next()
        }
    } catch(error){
        console.log(error);
        res.status(401).json({ message: "Un-authenticated Request" })
    }    
}

module.exports = authVerify;