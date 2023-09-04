const mongoose = require("mongoose");
const DB = process.env.DATABASE;
const food = require("../model/food_item");
const cat = require("../model/cat");

mongoose
  .connect(DB)
  .then(async () => {
    try {
      console.log(`connection successful`);
      const foodItems = await food.find({});
      const categories = await cat.find({});
      global.food_items = foodItems;
      global.categories = categories;
      //console.log(foodItems);
      //console.log(categories);
    } catch (error) {
      console.log(error);
    }
  })
  .catch((err) => {
    console.log(`connection unsuccessful->`, err);
  });
