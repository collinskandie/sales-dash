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
    var result = await pool.request().query("Select * from ArTrnDetails");
    return result.recordsets;
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  getData: getData,
  getData2: getData2
};
