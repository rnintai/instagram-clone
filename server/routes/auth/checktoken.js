const express = require("express");
const User = require("../../models/user.js");
const router = express.Router();
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

router.get("/", (req, res) => {
  const decode = jwt.verify(req.headers.authorization, `${process.env.secret}`);
  if (decode === undefined) {
    const error = new Error("Token Verification error");
    error.status = 401;
    next(error);
  } else {
    User.find({ name: decode.name }, async (err, docs) => {
      // 문제점: userInfo에 hash화된 password가 넘어간다. -> 보안 문제
      res.status(202).json({
        msg: "success",
        userInfo: {
          name: docs[0],
        },
      });
    });
  }
});

module.exports = router;
