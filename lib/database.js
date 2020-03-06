import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

export const database = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: 3306
});

export default database;