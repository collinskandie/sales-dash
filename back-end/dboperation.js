// let config = require('./dbconfig');
const sql = require("mssql");
var config = require('./dbconfig');

async function getData() {
  try {
    let pool = await sql.connect(config);
    console.log("Database connection success");
    // return pool;
  } catch (error) {
    console.log(error);
  }
}
async function getData2() {
  try {
    let pool = await sql.connect(config);
    var result = await pool.request().query("select Invoice,TrnMonth,Salesperson,NetSalesValue,Customer,ProductClass,TrnYear from ArTrnDetail where TrnYear >= 2022 and Branch <> 'ST' ");
    return result.recordsets;
  } catch (error) {
    console.log(error);
  }
}
async function getPeriod() {
  try {
    let pool = await sql.connect(config);
    var result = await pool.request().query("select Salesperson, Name from SalSalesperson");
    return result.recordsets;
  } catch (error) {
    console.log(error);
  }
}
//select sales per period
async function salesPeriods() {
  try {
    let pool = await sql.connect(config);
    var result = await pool.request().query("select month(InvoiceDate) month,sum(NetSalesValue) total from ArTrnDetails where TrnYear =2022  AND Branch != 'ST' group by month(InvoiceDate)order by month(InvoiceDate)");
    return result.recordsets;
  } catch (error) {
    console.log(error);
  }
}
async function currentYearSales() {
  try {
    let pool = await sql.connect(config);
    var result = await pool.request().query("select sum(NetSalesValue) totalsales from ArTrnDetails where TrnYear =2022");
    return result.recordsets;
  } catch (error) {
    console.log(error);
  }
}
async function currentMonthSales() {
  try {
    let pool = await sql.connect(config);
    var result = await pool.request().query("select sum(NetSalesValue) totalsales from ArTrnDetails where TrnYear =2022");
    return result.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getSalespersonSales() {
  try {
    let pool = await sql.connect(config);
    var result = await pool.request().query("select ProductClass, sum(NetSalesValue) total from ArTrnDetail where TrnYear =2022 and Salesperson = 'DIR' AND Branch != 'ST' group by ProductClass");
    return result.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getSalespersonDetails() {
  try {
    let pool = await sql.connect(config);
    var result = await pool.request().query("SELECT  A.Salesperson, sum(T.NetSalesValue)Sales,A.Name FROM SalSalesperson A JOIN ArTrnDetail T on ( A.Salesperson = T.Salesperson) where A.Salesperson ='001'  group by A.Salesperson,A.Name order by A.Salesperson");
    return result.recordsets;
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  getData: getData,
  getData2: getData2,
  getPeriod: getPeriod,
  salesPeriods: salesPeriods,
  currentMonthSales:currentMonthSales,
  currentYearSales:currentYearSales,
  getSalespersonSales:getSalespersonSales,
  getSalespersonDetails:getSalespersonDetails
  
};
