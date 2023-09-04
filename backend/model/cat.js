const mongoose = require("mongoose");

const cat = new mongoose.Schema(
  {
    CategoryName: {
      type: String,
      required: true,
    },
  },
  { collection: "food_category" }
);

const category = mongoose.model("cat", cat);
module.exports = category;
