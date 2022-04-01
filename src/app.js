const express = require('express');
const app = express();

const usersRouters = require('./routes/usersRoute.js')
const requestsRoute = require('./routes/requestsRoute.js')
const middleware = require('./middleware');


//Configurações
app.set('port', process.env.PORT|| 3001);
//Middlewares
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
    });

//Rota
//Rotas dem todos os tipode de utilizador
app.use('/users', usersRouters)
//Rotas com Instituicao e tabelas diretamente ligadas
app.use('/requests', requestsRoute)
//Rotas com Instituicao e tabelas diretamente ligadas



app.use('/',(req,res)=>{
    res.send("Hello World");
    });

app.listen(app.get('port'),()=>{
    console.log("Start server on port "+app.get('port'))
 })