const express = require('express');

const experienciasControler = require('../controlers/experienciasControler');

const experienciasRoute = express.Router();

experienciasRoute.get('/', experienciasControler.getAllExperiencias );

experienciasRoute.get('/:id', experienciasControler.getExperienciaById );

experienciasRoute.post('/', experienciasControler.createExperiencia );

experienciasRoute.put('/:id', experienciasControler.updateExperiencia );

experienciasRoute.delete('/:id', experienciasControler.deleteExperiencia );



module.exports = experienciasRoute;