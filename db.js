const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL DB');
});

module.exports = db;
