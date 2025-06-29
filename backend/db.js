require('dotenv').config({ path: '../.env' }); // Ensure path is correct

const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'todo_db',
  port: 3307  // or 3307 if you changed it earlier
});

db.connect((err) => {
  if (err) throw err;
  console.log('✅ Connected to MySQL');
});

module.exports = db;
