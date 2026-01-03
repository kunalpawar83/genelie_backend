const express = require("express");
const router = express.Router();
const wishListController = require("../controller/wishListCont.js");

// Route to add a new email to the wish list
router.post("/add", wishListController.addToWishList);

// Route to get all emails from the wish list
router.get("/", wishListController.getWishList);

module.exports = router;    