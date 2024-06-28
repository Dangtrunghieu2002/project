// backend/models/Passenger.js
const { sequelize, Sequelize } = require("./index");

const Passenger = sequelize.define("Passenger", {
  Passenger_ID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Payment_ID: Sequelize.INTEGER,
  Schedule_ID: Sequelize.INTEGER,
  F_name: Sequelize.STRING,
  L_name: Sequelize.STRING,
  Date_of_birth: Sequelize.DATE,
  Personal_ID: Sequelize.STRING,
  P_status: Sequelize.STRING,
});

module.exports = Passenger;
