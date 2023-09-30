// controllers/articulosController.js
const Articulo = require('../models/Articulo');

// Función para obtener todos los artículos
exports.getAllArticulos = async (req, res) => {
  try {
    const articulos = await Articulo.find();
    res.json(articulos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los artículos.' });
  }
}

// Función para obtener un artículo por ID
exports.getArticuloById = async (req, res) => {
  try {
    const articulo = await Articulo.findById(req.params.id);
    if (!articulo) {
      return res.status(404).json({ error: 'Artículo no encontrado.' });
    }
    res.json(articulo);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el artículo.' });
  }
}

// Función para crear un nuevo artículo
exports.createArticulo = async (req, res) => {
  const { nombre, precio, existencias } = req.body;
  try {
    const nuevoArticulo = new Articulo({ nombre, precio, existencias });
    await nuevoArticulo.save();
    res.status(201).json(nuevoArticulo);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el artículo.' });
  }
}

// Función para actualizar un artículo por ID
exports.updateArticulo = async (req, res) => {
  const { nombre, precio, existencias } = req.body;
  try {
    const articulo = await Articulo.findByIdAndUpdate(req.params.id, { nombre, precio, existencias }, { new: true });
    if (!articulo) {
      return res.status(404).json({ error: 'Artículo no encontrado.' });
    }
    res.json(articulo);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar el artículo.' });
  }
}

// Función para eliminar un artículo por ID
exports.deleteArticulo = async (req, res) => {
  try {
    const articulo = await Articulo.findByIdAndRemove(req.params.id);
    if (!articulo) {
      return res.status(404).json({ error: 'Artículo no encontrado.' });
    }
    res.json({ message: 'Artículo eliminado con éxito.' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el artículo.' });
  }
}