// backend/models/Schedules.js
const { sequelize, Sequelize } = require("./index");

const Schedules = sequelize.define("Schedules", {
  Schedule_ID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Route_ID: Sequelize.INTEGER,
  Bus_ID: Sequelize.STRING,
  DepartureTime: Sequelize.DATE,
  ActiveDay: Sequelize.STRING,
  S_Status: Sequelize.STRING,
});

module.exports = Schedules;
