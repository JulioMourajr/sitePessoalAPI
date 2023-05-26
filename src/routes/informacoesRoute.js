const express = require('express');

const informacoesControler = require('../controlers/informacoesControler');

const informacoesRoute = express.Router();

informacoesRoute.get('/1', informacoesControler.getAllInformacoes );
informacoesRoute.post('/', informacoesControler.createInformacao );
informacoesRoute.put('/1', informacoesControler.updateInformacao );
informacoesRoute.delete('/1', informacoesControler.deleteInformacao );

module.exports = informacoesRoute;