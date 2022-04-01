const express = require('express');
const router = express.Router();
//importer os controladores [2]
const multer = require('multer');

const upload = multer({dest: "uploads/" });
const requestsController = require('../controllers/requestsController')


// router.get('/testdata', filmesController.testdata);
router.post('/list/:email', requestsController.list);
router.get('/uploads/:id', requestsController.file);
router.post('/create', upload.single("picture"), requestsController.create);
router.post('/delete', requestsController.delete);

module.exports = router;