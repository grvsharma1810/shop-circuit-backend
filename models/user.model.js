const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({  
  name : {type : String, required : ["Can't add without name"]},
  email : {type : String, unique: true },
  password : String,  
  cart : [{
    _id : mongoose.Schema.Types.ObjectId,
    product : {type: mongoose.Schema.Types.ObjectId, ref : 'Product'},
    quantity : Number
  }],
  wishlist : [{
    _id : mongoose.Schema.Types.ObjectId,
    product : {type: mongoose.Schema.Types.ObjectId, ref : 'Product'}
  }]
})

const User = mongoose.model("User",UserSchema);

module.exports = {User};