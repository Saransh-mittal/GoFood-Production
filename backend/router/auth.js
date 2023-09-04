const express = require("express");
const router = express.Router();
require("../db/conn");
const User = require("../model/userSchema");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
router.post(
  "/createuser",
  [
    body("email", "incorret email").isEmail(),
    body("password", "incorrect password").isLength({ min: 5 }),
    body("phone", "incorrect phone no. length").isLength({ min: 10, max: 10 }),
  ],
  async (req, res) => {
    try {
      //console.log(req.body);
      const error = validationResult(req);
      if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
      }
      if (await User.findOne({ email: req.body.email }))
        return res.status(400).json({ error: "Email already exits" });

      const salt = await bcrypt.genSalt(10);
      const secPassword = await bcrypt.hash(req.body.password, salt);
      await User.create({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: secPassword,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

router.post(
  "/signin",
  [
    body("email", "incorret email").isEmail(),
    body("password", "incorrect password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      //console.log(req.body);
      const error = validationResult(req);
      if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
      }
      const user = await User.findOne({ email: req.body.email });
      if (!user)
        return res.status(400).json({ error: "Enter Valid Credentials" });
      const pwdCompare = await bcrypt.compare(req.body.password, user.password);
      if (pwdCompare) {
        const data = {
          user: {
            id: user.id,
          },
        };
        const authToken = jwt.sign(data, process.env.SECRET_KEY);
        return res.status(200).json({ success: true, authToken: authToken });
      } else return res.status(400).json({ error: "Enter Valid Credentials" });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

router.post("/fooddata", async (req, res) => {
  try {
    res.send([global.food_items,global.categories]);
    // console.log(global.food_items);
  } catch (error) {
    console.log(error);
  }
});
router.post("/orderdata", async (req, res) => {
  try {
    let data = req.body.order_data;
    await data.splice(0,0,{Order_date:req.body.order_date});

    await User.findOneAndUpdate({email:req.body.email},
      { $push:{order_data: data} }).then(() => {
          res.json({ success: true })
      })
  } catch (error) {
    console.log(error);
  }
});
router.post("/myOrderData", async (req, res) => {
  try {
    const user = await User.findOne({email:req.body.email});
    res.json({orderData:user.order_data});
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
