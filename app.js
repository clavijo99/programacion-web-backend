const express = require('express');
const app = express();
const db = require('./src/config/db');

const sitesRoute = require('./src/routes/sites');
const contactoRoutes = require('./src/routes/contact');

app.use(express.json());
app.use('/api/sites', sitesRoute);
app.use('/contacto', contactoRoutes);


// Conexión DB
db.connect();

module.exports = app;
