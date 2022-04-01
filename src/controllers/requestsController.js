
var request = require('../model/request/request');
var sequelize = require('../model/database');
const multer = require('multer');
var fs = require("fs");
const controllers = {}
sequelize.sync()

controllers.list = async ( req, res) => {
    let order = "";
    
    if(req.body.order != undefined && req.body.order != ""){
         order = req.body.order;
    }else{
         order = "id";
    }
    const { email } = req.params;
    const data = await request.findAll({
        order: [[order, 'ASC']],
        where: {email: email},
    })
    .then(function(data){
        return data;
    })
    .catch(error =>{
        return error;
    });
    res.json({success: true,data: data});
}


// New request
controllers.file = async (req, res) => {
    const {id} = req.params;
    console.log(id);

    fs.readFile('uploads/'+id, function(err, data)  {
    if (err){
        res.status(404).json({
            success: false,
            message: "file not found",
            data: data
        });
    }  // Fail if the file can't be read.
    else {
        res.writeHead(200, {'Content-Type': 'image/jpeg'});
        res.end(data); // Send the file data to the browser.
    }
    });
}
controllers.create = async (req, res) => {
    // data
    const mydata = req.body;
    // create
    // console.log(data);
    console.log(mydata);
    const filePath = req.protocol + "://" + req.hostname + ':3001/requests/uploads/' + req.file.filename;
    // console.log(name);
    // console.log(picture);
    const data = await request.create({
        name: mydata.name,
        email: mydata.email,
        laptop: mydata.laptop,
        date: mydata.date,
        issue: mydata.issue,
        notes: mydata.notes,
        serialnumber: mydata.serialN,
        picture: filePath,
    })
    .then(function (data){
        return data;
    })
    .catch(error =>{
        console.log("Erro: "+error)
        return error;
    })
    res.status(200).json({
        success: true,
        message: "success",
        data: data
    });
}     


controllers.delete = async (req, res) => {
    // parâmetros por post
    const { id } = req.body;
    // delete por sequelize
    const del = await request.destroy({
    where: { id: id}
    })
    res.json({success:true,deleted:del,message:"Deleted successful"});
}
module.exports = controllers;