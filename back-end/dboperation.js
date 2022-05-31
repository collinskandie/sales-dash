let config = require('./dbconfig');
const sql = require('mssql');

async function getData() {
    try {
        let pool =await sql.connect(config);
        console.log("Database connection seuccess");
    } catch (error) {
     console.log(error)   
    }
}
module.exports ={
    getData: getData,
};