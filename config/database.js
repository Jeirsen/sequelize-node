const Sequelize = require('sequelize');

module.exports = sequelize = new Sequelize('codegig', 'root', 'root', {
    host: 'localhost',
    dialect: 'postgres',
    operatorAliases: false
});