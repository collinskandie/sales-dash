var express = require("express");
var router = express.Router();
const cors = require("cors");
const ww = require("../dboperation");
var flatten = require("lodash.flatten");
router.use(cors());

/* GET home page. */
router.get("/testconnection", function (req, res, next) {
  ww.getData();
  res.render("index", { title: "Collins" });
  console.log("Working");
});
// get data from table
router.get("/api/summarySales", function (req, res, next) {
  ww.getData2().then((result1) => {
    // res.json(result1);
    var flattened = flatten(result1);
    var jsonContent = JSON.stringify(flattened);
    return res.send(jsonContent);
  });
});
router.get("/api/selectPeriod", function (req, res, next) {
  ww.getPeriod().then((period) => {
    // res.json(result1);
    var flattened = flatten(period);
    var jsonContent = JSON.stringify(flattened);
    return res.send(jsonContent);
  });
});
router.get("/api/selectSubTotals", function (req, res, next) {
  ww.salesPeriods().then((period) => {
    // res.json(result1);
    var flattened = flatten(period);
    var jsonContent = JSON.stringify(flattened);
    return res.send(jsonContent);
  });
});
router.get("/api/yearTotal", function (req, res, next) {
  ww.currentYearSales().then((period) => {
    // res.json(result1);
    var flattened = flatten(period);
    var jsonContent = JSON.stringify(flattened);
    return res.send(jsonContent);
  });
});
router.get("/api/monthTotal", function (req, res, next) {
  ww.currentMonthSales().then((period) => {
    // res.json(result1);
    var flattened = flatten(period);
    var jsonContent = JSON.stringify(flattened);
    return res.send(jsonContent);
  });
});
module.exports = router;
