const Product = require("../../models/product.model");

const getProducts = async (req, res, next) => {
    try {
        const products = await Product.find({});        
        res.status(200).json({ success: true, products })
    } catch (err) {
        err.customMessage = "Unable to find products"
        next(err);
    }
}

module.exports = getProducts;