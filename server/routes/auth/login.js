const express = require("express");
const router = express.Router();

const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/user.js");

const dotenv = require("dotenv");

dotenv.config();

router.post("/", async (req, res, next) => {
  const req_name = req.body.name;
  const req_password = req.body.password;
  const secret_key = `${process.env.secret}`;
  let password = "";

  User.find({ name: req_name }, async (err, docs) => {
    console.log(docs);
    if (docs.length === 0) {
      const error = new Error("입력하신 이름이 존재하지 않습니다.");
      error.statusCode = 422;
      error.data = [
        {
          nam: req_name,
        },
      ];
      next(error);
    } else {
      password = docs[0].password;
      if (await bcryptjs.compare(req_password, password)) {
        const token = await jwt.sign(
          {
            name: req_name,
          },
          secret_key,
          {
            expiresIn: "30m",
          }
        );
        res.status(201).json({
          msg: "Login Success",
          userId: docs[0]._id,
          token,
        });
      } else {
        const error = new Error("패스워드가 일치하지 않습니다.");
        error.statusCode = 422;
        return next(error);
      }
    }
  });
});

module.exports = router;
