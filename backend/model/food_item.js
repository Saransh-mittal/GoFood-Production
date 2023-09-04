const mongoose = require("mongoose");

const foodItem = new mongoose.Schema(
  {
    CategoryName: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    options: [
      {
        half: {
          type: String,
        },
        full: {
          type: String,
        },
        regular: {
          type: String,
        },
        medium: {
          type: String,
        },
        large: {
          type: String,
        },
      },
    ],
    description: {
      type: String,
      required: true,
    },
  },
  { collection: "food_items" }
);

const food = mongoose.model("foodItem", foodItem);

module.exports = food;
