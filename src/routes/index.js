const express = require('express');
const usuariosRoute = require('./usuarios.route');
const router = express.Router();

router.use(usuariosRoute)



module.exports = router;