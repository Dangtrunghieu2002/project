// backend/models/RouteInfor.js
const { sequelize, Sequelize } = require("./index");

const RouteInfor = sequelize.define("RouteInfor", {
  Route_ID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  RouteName: Sequelize.STRING,
  Location: Sequelize.STRING,
  DepartureLocation: Sequelize.STRING,
  ArrivalLocation: Sequelize.STRING,
  R_status: Sequelize.STRING,
});

module.exports = RouteInfor;
