const express = require("express");
const sql = require("mssql");
const app = express();
const cors = require("cors");

//create config
const config = {
  server: "COLLINS-KANDIE\\SQL SERVER",
  user: "collins",
  password: "123",
  database: "SysproCompanyA",
  options: {
    enableArithAbort: true,
  },
  connectionTimeout: 150000,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
};

sql.on('error', err =>{
    console.log(err.message)
});

async function getDBUsersAsyncFunction(){
    try {
        let pool =await sql.connect(config);
       let result = await pool.request().query('select * from AdmAltTax');
       console.log(result);
       sql.close()

    } catch (error) {
        console.log(error.message);
        sql.close()        
    }
}
getDBUsersAsyncFunction();
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(port, "port  active"));
