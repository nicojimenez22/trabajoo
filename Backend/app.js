const { config } = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 3000;

// Importar coneccion a la DB
const conectarDB = require('./Config/configDB');

conectarDB();

const productRoutes = require('./Routes/productRoutes');
const carritoRoutes = require('./Routes/carritoRoutes');


app.use(express.json()); 
app.use(cors());
app.use('/api', productRoutes);
app.use('/api', carritoRoutes);

app.use(cors({
  origin: "http://localhost:5173", 
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type"
}));

app.get('/', (req, res) => {
    res.send('¡Hola desde el backend!');
  });

app.listen(process.env.PORT || PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`)
});


require('dotenv').config()



