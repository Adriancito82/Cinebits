require('dotenv').config();

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');

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
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'FRONT')));

app.get('/peliculas', (req, res) => {
  db.query('SELECT * FROM cinebits_db.peliculas', (err, results) => {
    if (err) {
      console.error("Error al obtener películas", err);
        return res.status(500).json({ error: "Error al obtener películas" });
    }
      res.json(results);
  });
});


app.get('/videojuegos', (req, res) => {
  db.query('SELECT * FROM cinebits_db.videojuegos', (err, results) => {
    if (err) {
      console.error("Error al obtener videojuegos", err);
        return res.status(500).json({ error: "Error al obtener videojuegos" });
    }
      res.json(results);
  });
});

// Levantar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en ${process.env.DB_HOST}:${PORT}`);
});
