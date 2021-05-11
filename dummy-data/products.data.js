const faker = require("faker");

faker.seed(1024);
const products = [...Array(100)].map((item) => ({
  name: faker.commerce.productName(),
  image: faker.random.image(),
  price: faker.commerce.price(),
  inStock: faker.datatype.boolean(),
  fastDelivery: faker.datatype.boolean(),
  rating: faker.finance.amount(1, 5, 1),
  discount: faker.random.arrayElement([25, 50, 70, 0]),
  category: faker.random.arrayElement([
    "Speakers",
    "Digital Audio Workstation",
    "MIDI Keyboards",
    "Audio Interfaces",
    "Headphones",    
  ]),
}));

module.exports = products;