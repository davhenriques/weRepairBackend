var Sequelize = require('sequelize');
var sequelize = require('../database');


var Request = sequelize.define('request', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    laptop: Sequelize.STRING,
    issue: Sequelize.STRING,
    notes: Sequelize.STRING(500),
    serialnumber: Sequelize.STRING,
    date: Sequelize.DATEONLY,
    name: Sequelize.STRING(40),
    email: Sequelize.STRING,
    // picture will be the a path
    picture: Sequelize.STRING,
    },
    {
        timestamps: false,
    });
   
module.exports = Request