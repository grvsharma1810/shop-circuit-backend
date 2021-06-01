const express = require('express');
const cors = require("cors")
const morgan = require('morgan')
const dotenv = require("dotenv")
const authVerify = require("./middlewares/authVerify");
const errorHandler = require("./middlewares/errorHandler");
const { initializeDBConnection } = require("./db/db.connect.js")

const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const productRoutes = require("./routes/product.routes");
const cartRoutes = require("./routes/cart.routes");
const cartItemRoutes = require("./routes/cartItem.routes");
const wishlistRoutes = require("./routes/wishlist.routes");
const wishlistItemRoutes = require("./routes/wishlistItem.routes");

dotenv.config();
const app = express();
app.use(morgan('dev'))
app.use(express.json());
app.use(cors())

initializeDBConnection();

app.use("/", authRoutes);
app.use("/products", productRoutes);
app.use("/users", authVerify, userRoutes);
app.use("/cart", authVerify, cartRoutes);
app.use("/cart/:cartId/cart-items", authVerify, (req, res, next) => { req.cartId = req.params.cartId; next(); }, cartItemRoutes);
app.use("/wishlist", authVerify, wishlistRoutes);
app.use("/wishlist/:wishlistId/wishlist-items", authVerify, (req, res, next) => { req.wishlistId = req.params.wishlistId; next() }, wishlistItemRoutes);

/**
 * 404 Route Handler
 * Note: DO not MOVE. This should be the last route
 */
app.use((req, res) => {
  res.status(404).json({ message: "route not found on server, please check" })
});


/**
 * Error Handler
 * Don't move
 */
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log('Server Started On Port : ', PORT);
});