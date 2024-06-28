// backend/models/BusInfor.js
const { sequelize, Sequelize } = require("./index");

const BusInfor = sequelize.define("BusInfor", {
  BusPlateNumber: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  Driver_ID: Sequelize.INTEGER,
  Schedule_ID: Sequelize.INTEGER,
  Insurance_End_Date: Sequelize.DATE,
  Validation_End_Date: Sequelize.DATE,
  B_status: Sequelize.STRING,
});

module.exports = BusInfor;
