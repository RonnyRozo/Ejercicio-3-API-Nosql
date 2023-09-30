// routes/articulos.js
const express = require('express');
const router = express.Router();
const articulosController = require('../controllers/articulosController');

// Ruta para obtener todos los artículos
router.get('/', articulosController.getAllArticulos);

// Ruta para obtener un artículo por ID
router.get('/:id', articulosController.getArticuloById);

// Ruta para crear un nuevo artículo
router.post('/', articulosController.createArticulo);

// Ruta para actualizar un artículo por ID
router.put('/:id', articulosController.updateArticulo);

// Ruta para eliminar un artículo por ID
router.delete('/:id', articulosController.deleteArticulo);

module.exports = router;