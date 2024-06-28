// backend/models/index.js
import { Sequelize } from "sequelize";
import { mysql as config } from "../config.js";

// Setting up a new Sequelize instance
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    port: config.port,
    define: {
      timestamps: false,
    },
  }
);

// Exporting sequelize and Sequelize
export { sequelize, Sequelize };
