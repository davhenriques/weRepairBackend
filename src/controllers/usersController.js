const { Op } = require("sequelize");
var utilizador = require('../model/users/user');

var sequelize = require('../model/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config');
const controllers = {}
sequelize.sync()



controllers.list = async ( req, res) => {
    const data = await utilizador.findAll({ })
    .then(function(data){
        return data;
    })
    .catch(error =>{
        return error;
    });
    res.json({success: true,data: data});
}


controllers.login = async (req, res) => {
    if (req.body.username && req.body.password) {
        USERNAME = req.body.username;
        var PASSWORD = req.body.password;
    }
    var user = await utilizador.findOne({ where: { USERNAME: USERNAME }
     })
        .then(function (data) {
            return data;
        })
        .catch(error => {
            return error;
        })
    if (PASSWORD === null || typeof PASSWORD === "undefined") {
        res.status(403).json({
            success: false,
            message: 'Missing fields'
        });
    } else {
        if (req.body.username && req.body.password && user) {
            const isMatch = await bcrypt.compare(PASSWORD, user.PASSWORD);
            if (req.body.username === user.USERNAME && isMatch) {
                let token = jwt.sign({ USERNAME: req.body.username }, config.jwtSecret,
                    {
                        expiresIn: '24h' //expira em 1 hora
                    });
                user.PASSWORD = 'ENCRYPTED'
                res.json({ success: true, message: 'Authentication success!', token: token});
            } else {
                res.status(403).json({ success: false, message: 'Invalid fields.' });
            }
        } else {
            res.status(400).json({ success: false, message: 'Error ocured during authentication. Try again later.' });
        }
    }
}


controllers.register = async (req,res) => {
    if (req.body.username && req.body.password) {
        var USERNAME = req.body.username;
        var PASSWORD = req.body.password;
        var EMAIL = req.body.email;
        var NAME = req.body.name;
        const data = await utilizador.create({
            NOME: NAME,
            EMAIL: EMAIL,
            USERNAME: USERNAME,
            PASSWORD: PASSWORD
        })
        .then(function(data){
        return data;
        })
        .catch(error =>{
        console.log("Erro: "+error);
        return error;
        })
        res.status(200).json({
            success: true,
            message:"Success",
            data: data
        });
    }else{
        res.status(403).json({
            success: false,
            message: 'Missing fields'
        });
    }

    }

module.exports = controllers;