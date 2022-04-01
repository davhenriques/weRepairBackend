const express = require('express');
const router = express.Router();
const middleware = require('../middleware');

const utilizadoresController = require('../controllers/usersController')
// const superadminController = require('../controllers/users/superadminController')
// const admininstituicaoController = require('../controllers/users/admininstituicaoController')
// const geralController = require('../controllers/users/geralController')
// const comunidadeinstituicaoController = require('../controllers/users/comunidadeinstituicaoController')
// const nivelController = require('../controllers/users/nivelController')


router.get('/list', utilizadoresController.list);
router.post('/login', utilizadoresController.login);
router.post('/register', utilizadoresController.register);
// router.get('/superadmin/list', superadminController.list);
// router.get('/admininstituicao/list', admininstituicaoController.list);
// router.get('/comunidadeinstituicao/listmembros/:id', comunidadeinstituicaoController.getaceites);
// router.get('/comunidadeinstituicao/list/:id', comunidadeinstituicaoController.listNaoAceites);
// router.put('/comunidadeinstituicao/aceitar/:id', middleware.checkToken, comunidadeinstituicaoController.aceitar);
// router.put('/comunidadeinstituicao/recusar/:id', middleware.checkToken, comunidadeinstituicaoController.delete);

// router.get('/geral/list', geralController.list);
// router.get('/nivel/list', nivelController.list);
    


module.exports = router;