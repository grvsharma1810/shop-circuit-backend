const productsData = require("../dummy-data/products.data");
const Product = require("../models/product.model");

// one time add in db
async function fillProductsCollection() {
    try {
        productsData.forEach(async (product) => {
            const newProduct = new Product(product);
            await newProduct.save();
        });
    } catch (e) {
        console.log(e);
    }
}

module.exports = fillProductsCollection;