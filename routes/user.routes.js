const express = require("express");
const getAllUsers = require("../controllers/user/get-all-users");
const getUser = require("../controllers/user/get-user");

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:userId", (req, res, next) => { req.userId = req.params.userID; next(); }, getUser);

module.exports = router