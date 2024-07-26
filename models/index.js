// models/index.js
const sequelize = require('../config/database');
const Person = require('./person');
const Address = require('./address');
const Order = require('./order');
const Payment = require('./payment');


Person.hasOne(Address, { as: 'address', foreignKey: 'personId' });
Address.belongsTo(Person, { foreignKey: 'personId' });

Person.hasMany(Order, { as: 'orders', foreignKey: 'personId' });
Order.belongsTo(Person, { foreignKey: 'personId' });

Order.hasMany(Payment, { as: 'payments', foreignKey: 'orderId' });
Payment.belongsTo(Order, { foreignKey: 'orderId' });


module.exports = { Person, Address, Order, Payment };
