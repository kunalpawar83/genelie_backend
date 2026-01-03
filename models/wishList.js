const mongoose = require("mongoose");
const validator = require("validator");

const wishListSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "A user must have email"],
      lowercase: true,
      validate: [validator.isEmail, "Please provide valid email"],
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const WishList = mongoose.model("WishList", wishListSchema);
module.exports = WishList;