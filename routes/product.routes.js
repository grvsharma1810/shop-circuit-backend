const express = require("express");
const getProductById = require("../controllers/product/getProductById");
const getProducts = require("../controllers/product/getProducts");

const router = express.Router();

router.get("/", getProducts);
router.get("/:productId", (req, res, next) => { req.productId = req.params.productId; next(); }, getProductById);

module.exports = router