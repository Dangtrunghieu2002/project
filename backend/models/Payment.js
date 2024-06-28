// backend/models/Payment.js
const { sequelize, Sequelize } = require("./index");

const Payment = sequelize.define("Payment", {
  Payment_ID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Passenger_ID: Sequelize.INTEGER,
  Schedule_ID: Sequelize.INTEGER,
  TicketPrice: Sequelize.FLOAT,
  TicketQuantity: Sequelize.INTEGER,
  VAT: Sequelize.FLOAT,
  TotalPrice: Sequelize.FLOAT,
  Payment_Methods: Sequelize.STRING,
});

module.exports = Payment;
