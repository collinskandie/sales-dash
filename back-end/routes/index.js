var express = require("express");
var router = express.Router();
const cors = require("cors");
const ww = require("../dboperation");
router.use(cors());

/* GET home page. */
router.get("/testconnection", function (req, res, next) {
  ww.getData();
  res.render("index", { title: "Collins" });
  console.log("Working");
});
// get data from table
router.get("/getdata", function (req, res, next) {
  ww.getData2().then((result1) => {
    res.json(result1[0]);
  });
  // res.render("index", { title: "Get Database data" });
  // console.log("Working");
});

module.exports = router;
