require('dotenv').config()
const mysql = require('mysql');

const con = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.HOST_NAME,
  password: process.env.PASSWORD,
  database: process.env.DBASE
});

module.exports = con