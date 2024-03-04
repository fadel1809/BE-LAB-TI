import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "lab_ti",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  // port: 3306,
  // password: '',
});
