import mysql from "mysql2/promise";
import * as dotenv from "dotenv"
dotenv.config()
export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
