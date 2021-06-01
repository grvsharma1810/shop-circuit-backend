const Product = require("../../models/product.model");

const getProductById = async (req, res, next) => {
    try {
        const productId = req.productId;
        product = await Product.findById(productId);
        res.status(200).json({ success: true, product })
    } catch (err) {
        err.customMessage = "Unable to find products";
        next(err);
    }
}

module.exports = getProductById;