import mysql from "mysql2/promise";
import * as dotenv from "dotenv"
dotenv.config()
export const db = mysql.createPool({
  host: "localhost",
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
