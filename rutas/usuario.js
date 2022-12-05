const express = require('express');
const ruta = express.Router();
const cusuario = require('../controladores/usuario');
const auth = require('../auth');

ruta.get('/listar', auth.verificatoken, cusuario.listar);
ruta.post('/login', cusuario.login);
ruta.post('/modificar', auth.verificatoken, cusuario.modificar);
ruta.post('/agregar', auth.verificatoken, cusuario.agregar);
ruta.post('/borrar', auth.verificatoken, cusuario.borrar);

module.exports=ruta;