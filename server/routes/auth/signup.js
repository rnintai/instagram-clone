const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../../models/user.js");
const bcryptjs = require("bcryptjs");

router.post(
  "/",
  [
    body("name")
      .trim()
      .isLength({ min: 4 })
      .withMessage("NAME must be at least 4 characters!")
      .custom((value) => {
        return User.findOne({ name: value }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject("NAME already exists!");
          }
        });
      }),
    body("password")
      .trim()
      .isLength({ min: 6 })
      .withMessage("PASSWORD must be at least 6 characters!"),
    body("password_confirm")
      .trim()
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          return Promise.reject("Password did not match.");
        } else {
          return Promise.resolve();
        }
      }),
  ],
  async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const error = new Error("Validation Failed.");
      error.statusCode = 422;
      error.data = errors.array();
      return next(error);
    }

    const name = req.body.name;
    const password = req.body.password;

    try {
      const hashedPW = await bcryptjs.hash(password, 10);

      const user = new User({
        name,
        password: hashedPW,
      });

      const result = await user.save();
      res.status(201).json({
        msg: "User Created",
        userId: result._id,
      });
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
