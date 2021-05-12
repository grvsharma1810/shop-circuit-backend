const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const cors = require("cors")
const morgan = require('morgan')
const fs = require('fs')
const dotenv = require("dotenv")

const { User } = require("./models/user.model");
const { initializeDBConnection } = require("./db/db.connect.js")
const userRoutes = require("./routes/user.routes");
const productRoutes = require("./routes/product.routes");

dotenv.config();
const app = express();

app.use(morgan('common', {
  stream: fs.createWriteStream('./access.log', { flags: 'a' })
}));
app.use(morgan('dev'))

app.use(bodyParser.json());
app.use(cors())

initializeDBConnection();

app.get('/', (req, res) => {
  res.send('Shop Circuit API')
});

app.use("/login", async (req, res) => {
  try {
    const userCredentials = {
      email: req.body.email,
      password: req.body.password
    }
    console.log({ userCredentials })
    const user = await User.findOne(userCredentials).select("_id name email");
    console.log({ user })
    if (user) {
      res.status(200).json({ success: true, user });
    } else {
      res.status(401).json({ success: false, message: "User Credentials are invalid" });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: "unable to login user", errorMessage: err.message })
  }
})


app.use("/users", userRoutes);
app.use("/products", productRoutes);

/**
 * 404 Route Handler
 * Note: DO not MOVE. This should be the last route
 */
app.use((req, res) => {
  res.status(404).json({ success: false, message: "route not found on server, please check" })
})


/**
 * Error Handler
 * Don't move
 */
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "error occured, see the errMessage key for more details", errorMessage: err.message })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server Started On Port : ', PORT);
});