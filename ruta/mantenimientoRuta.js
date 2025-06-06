const express = require('express');
const router = express.Router();                                                                // Crea un router de Express
const { calcularMantenimiento } = require('../controlador/mantenimientoControlador');           // Importa el controlador

router.post('/mantenimiento', calcularMantenimiento);                                           // Define la ruta POST /api/mantenimiento

module.exports = router; // Exporta el router para usarlo en index.js
