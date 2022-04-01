var Sequelize = require('sequelize');
var sequelize = require('../database');
const bcrypt = require('bcrypt'); //encripta a pass a guardar na BD

var utilizador = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    name: Sequelize.TEXT,
    email: Sequelize.TEXT,
    username: Sequelize.STRING(),
    PASSWORD: Sequelize.STRING()
},
{
    timestamps: false,
});
    
utilizador.beforeCreate((utilizador, options) => {
    return bcrypt.hash(utilizador.PASSWORD, 10)
        .then(hash => {
            utilizador.PASSWORD = hash;
        })
        .catch(err => {
            throw new Error();
        });
});

module.exports = utilizador