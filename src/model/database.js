var Sequelize = require('sequelize');
var sequelize= new Sequelize('databasename', 'postgres', 'password', {
    host: 'localhost',
    port: '5432',
    dialect: 'postgres',
    define: {
        //prevent sequelize from pluralizing table names
        freezeTableName: true
    },
    // logging: false
});

module.exports = sequelize;