const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const Address = sequelize.define('Address', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  address: { type: DataTypes.STRING, allowNull: false }
});

Address.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Address, { foreignKey: 'userId' });

module.exports = Address;
