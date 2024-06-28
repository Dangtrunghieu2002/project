// Importing sequelize and Sequelize from the index file
import { sequelize, Sequelize } from "./index.js";

// Define the User model using ES6 class syntax with sequelize.define
const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING(255),
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING(45),
    allowNull: false,
  },
});

// Exporting User model using ES6 export
export default User;
