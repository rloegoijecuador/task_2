const { getAll, create, getOne, remove, update } = require('../controllers/usuarios.controllers');
const express = require('express');

const usuariosRoute = express.Router();

usuariosRoute.route('/usuarios')
    .get(getAll)
    .post(create);

usuariosRoute.route('/usuarios/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = usuariosRoute;