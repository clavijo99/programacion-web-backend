const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./src/config/db');

const sitesRoute = require('./src/routes/sites');
const contactoRoutes = require('./src/routes/contact');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/sites', sitesRoute);
app.use('/contacto', contactoRoutes);


// Conexión DB
db.connect();

module.exports = app;
