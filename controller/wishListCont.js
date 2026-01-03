const WishList = require("../models/wishList.js");
const appError = require("../utils/appError.js");
const catchAsync = require("../utils/catchAsync.js");

// Add a new email to the wish list
exports.addToWishList = catchAsync(async (req, res, next) => {
    const { email } = req.body; 
    if (!email) {
        return next(new appError("Email is required", 400));
    }
    console.log(email);
    const newEmail = new WishList({ email });
    console.log(newEmail);
    const newWishListEntry = await newEmail.save();
    console.log(newWishListEntry);
    res.status(201).json({
        status: "success",
        data: {
            wishList: newWishListEntry,
        },
    });
});

// Get all emails from the wish list
exports.getWishList = catchAsync(async (req, res, next) => {
    const wishListEntries = await WishList.find();
    res.status(200).json({
        status: "success",
        results: wishListEntries.length,
        data: {
            wishList: wishListEntries,
        },
    });
});