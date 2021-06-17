const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String },
  image: { type: String },
  price: { type: Number },
  inStock: { type: Boolean },
  fastDelivery: { type: Boolean },
  rating: { type: Number },
  discount: { type: Number },
  category: { type: String },
  highlights: [{ type: String }],
  sourceUrl: { type: String },
});

const Product = mongoose.model("Product", productSchema);



module.exports = Product;
