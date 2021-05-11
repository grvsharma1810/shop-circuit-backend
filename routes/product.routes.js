const express = require("express");
const {Product,fillProductsCollection} = require('../models/product.model')

const router = express.Router();

router.route("/")
.get(async (req,res) => {
  try{    
    products = await Product.find({});  
    res.status(200).json({success : true, products})
  } catch (err){
    res.status(500).json({ success: false, message: "Unable to find products", errorMessage: err.message})
  }
})

router.route("/:productId")
.get(async (req,res) => {
  try{    
    const {productId} = req.params;
    product = await Product.findById(productId); 
    if(product) {
      res.status(200).json({success : true, product})
    } else{
      res.status(404).json({success : true, message: "Product Not Found"})
    }   
  } catch (err){
    res.status(500).json({ success: false, message: "Unable to find products", errorMessage: err.message})
  }
})

module.exports = router