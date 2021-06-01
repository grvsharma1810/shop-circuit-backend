const express = require("express");
const login = require("../controllers/auth/login");
const resetPassword = require("../controllers/auth/reset-password");
const signup = require("../controllers/auth/signup");
const welcome = require("../controllers/auth/welcome");

const router = express.Router();
router.route("/").get(welcome)
router.route("/login").post(login);
router.route("/signup").post(signup);
router.route("/reset-password").get(resetPassword);

module.exports = router