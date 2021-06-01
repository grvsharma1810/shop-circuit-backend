const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({  
  name: String,
  image: String,
  price: Number,
  inStock: Boolean,
  fastDelivery: Boolean,
  rating: Number,
  discount: Number,
  category: String,
});

const Product = mongoose.model("Product", productSchema);



module.exports = Product;
