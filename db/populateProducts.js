const productsData = require("../dummy-data/products.data");

// one time add in db
async function fillProductsCollection() {
    try {
        productsData.forEach(async (product) => {
            const newProduct = new Product(product);
            const savedProduct = await newProduct.save();
            console.log(savedProduct);
        });
    } catch (e) {
        console.log(e);
    }
}

module.exports = fillProductsCollection;