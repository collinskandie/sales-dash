const config = {
  server: "SYSPROSERVER",
  user: "syspro",
  password: "syspro",
  database: "SysproCompanyA",
  options: {
    trustedConnection: true,
    encrypt: true,
    enableArithAbort: true,
    trustServerCertificate: true,
  },
};
module.exports = config;
