const express = require("express");
const mongoose = require("mongoose");
const {Product} = require("../models/product.model")

const router = express.Router();

router.route("/")
.get(async (req,res) => {  
  res.json({success: true, wishlist : req.user.wishlist});
})

router.route("/")
.post(async (req,res) => {    
  try{    
    let wishlistItem = {
      _id: mongoose.Types.ObjectId(),
      product : req.body.productId,      
    }
    req.user.wishlist.push(wishlistItem);
    await req.user.save();
    wishlistItem.product = await Product.findById(wishlistItem.product);
    res.status(201).json({success: true, wishlistItem});
  } catch (err){
    res.status(500).json({ success: false, message: "Unable to add wishlist", errorMessage: err.message})
  }  
})

router.route("/:wishlistItemId")
.delete(async (req,res) => {
  const {wishlistItemId} = req.params;
  let user = req.user;  
  user.wishlist.pull({_id : wishlistItemId});
  user = await user.save();
  res.status(200).json({deleted : true});
})

module.exports = router