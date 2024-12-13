const express = require("express");
const mongoose = require("mongoose");
const getCart = require("../controllers/cart/getCartById");
const createCartItem = require("../controllers/cartItem/createCartItem");
const updateCartItem = require("../controllers/cartItem/updateCartItem");
const deleteCartItem = require("../controllers/cartItem/deleteCartItem");
const Product = require("../models/product.model")

const router = express.Router();

router.post("/", createCartItem);

router.post("/:cartItemId", (req, res, next) => {
    req.cartItemId = req.params.cartItemId
    next()
}, updateCartItem)

router.delete("/:cartItemId", (req, res, next) => {
    req.cartItemId = req.params.cartItemId
    next()
}, deleteCartItem)

module.exports = router