// app.js
const express = require('express');
const mongoose = require('mongoose');
const db = require('./db'); // Importa la conexión a la base de datos

const app = express();

// Resto de la configuración de Express...

// Rutas y controladores...
app.use('/api/articulos', require('./routes/articulos'));
// Agrega rutas para los tickets también...

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});