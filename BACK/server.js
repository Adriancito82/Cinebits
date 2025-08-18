require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.DB_PORT;

// Configuración de la conexión
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,       // tu usuario MySQL
  password: process.env.DB_PASS, // tu password
  database: process.env.DB_NAME // tu base de datos
});

// Conectar a la base de datos
db.connect(err => {
  if (err) {
    console.error('Error de conexión:', err);
    return;
  }
  console.log('Conectado a MySQL 🚀');
});

// Ruta de prueba
app.get('/', (req, res) => {
  db.query('SELECT * FROM peliculas', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error en la consulta');
      return;
    }
    res.json(results);
  });
});

// Levantar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en ${process.env.DB_HOST}:${PORT}`);
});
