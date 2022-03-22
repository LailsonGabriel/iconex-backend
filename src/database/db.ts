import { Sequelize } from "sequelize";
require("dotenv").config();

export const db = new Sequelize(
  process.env.DB_NAME || "name",
  process.env.DB_USER || "root",
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST || "localhost",
    port: 3306,
    dialect: "mysql",
    logging: false,
  },
);
