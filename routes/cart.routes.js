const express = require("express");
const getCart = require("../controllers/cart/getCart");
const getCartById = require("../controllers/cart/getCartById");
const updateCart = require("../controllers/cart/updateCart");

const router = express.Router();

router.get("/", (req, res, next) => {
  req.userId = req.query.userId;
  next()
}, getCart)

router.get("/:cartId", (req, res, next) => {
  req.cartId = req.params.cartId
  next()
}, getCartById)

router.post("/:cartId", (req, res, next) => {
  req.cartId = req.params.cartId
  next()
}, updateCart)

module.exports = router