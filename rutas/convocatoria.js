const express = require('express');
const ruta = express.Router();
const cconvocatoria = require('../controladores/convocatoria');
const auth = require('../auth');

ruta.get('/listar', auth.verificatoken, cconvocatoria.listar);
ruta.post('/modificar', cconvocatoria.modificar);
ruta.post('/agregar', auth.verificatoken, cconvocatoria.agregar);
ruta.post('/borrar', auth.verificatoken, cconvocatoria.borrar);

module.exports=ruta;