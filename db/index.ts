import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

export const getDB = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      port: process.env.MYSQL_PORT,
      user: process.env.MYSQL_USER,
      database: process.env.MYSQL_DATABASE,
      password: process.env.MYSQL_PASSWORD,
    });
    return drizzle(connection);
  } catch (error) {
    console.log(error);
    return Promise.resolve(null)
  }
}
