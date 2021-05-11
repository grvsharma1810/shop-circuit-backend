const express = require("express");
const {User} = require('../models/user.model')
const cartRoutes = require("./cart.routes")
const wishlistRoutes = require("./wishlist.routes")

const router = express.Router();

router.route("/")
.post(async (req,res) => {
  try {
    const user = {
      name : req.body.name,
      email : req.body.email,
      password : req.body.password,      
    }    
    const newUser = new User(user);
    let savedUser = await newUser.save();  
    
    savedUser.cart = undefined;
    savedUser.wishlist = undefined;    
    savedUser.password = undefined;             
    res.status(201).json({success : true, user : savedUser})
  } catch (err) {    
    res.status(400).json({ success: false, message: "Unable to add user", errorMessage: err.message})
  }
})

router.route("/:userId")
.get(async (req,res) => {
  try {    
    const {userId} = req.params;    
    const user = await User.findById(userId).select("_id name cart wishlist");    
    if(user){
      res.status(200).json({success : true, user})
    }
    else{
      res.status(404).json({success : true, message:"Can't find user with this ID"})
    }    
  } catch (err) {    
    res.status(500).json({ success: false, message: "Unable to add user", errorMessage: err.message})
  }
})

router.param("userId", async (req, res, next, userId) => {
  try {
    // Step Two: Getting the user using `findById`
    let user = await User.findById(userId).populate("cart.product").populate("wishlist.product");    

    if (!user) { // Step Three: Validating and sending error
      return res.status(400).json({ success: false, message: "error getting user"})
    }

    req.user = user; // Step Four: Putting it in req object
    next(); // Step Five: Calling next(), to invoke the route handler
  } catch (err) {
    console.log(err);
     res.status(400).json({ success: false, message: "error while retrieving the user"})
  }
})

router.use("/:userId/cart",cartRoutes);
router.use("/:userId/wishlist",wishlistRoutes);

module.exports = router