const express = require("express");
const mongoose = require("mongoose");
const {Product} = require("../models/product.model")

const router = express.Router();

router.route("/")
.get(async (req,res) => {  
  res.json({success: true, cart : req.user.cart});
})

router.route("/")
.post(async (req,res) => {    
  try{    
    let cartItem = {
      _id: mongoose.Types.ObjectId(),
      product : req.body.productId,
      quantity : req.body.quantity
    }
    req.user.cart.push(cartItem);
    await req.user.save();
    cartItem.product = await Product.findById(cartItem.product);
    res.status(201).json({success: true, cartItem});
  } catch (err){
    res.status(500).json({ success: false, message: "Unable to add cart", errorMessage: err.message})
  }  
})

router.route("/:cartItemId")
.post(async(req,res) => {
  const cartItemUpdates = req.body;
  const {cartItemId} = req.params;
  let user = req.user;  
  const cartItemIndex = user.cart.findIndex(cartItem => cartItem._id == cartItemId);
  user.cart[cartItemIndex].quantity = req.body.quantity;
  user = await user.save();
  res.status(201).json({cartItem : user.cart[cartItemIndex]});
})

router.route("/:cartItemId")
.delete(async (req,res) => {
  const {cartItemId} = req.params;
  let user = req.user;  
  user.cart.pull({_id : cartItemId});
  user = await user.save();
  res.status(200).json({deleted : true});
})

module.exports = router