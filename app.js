const express = require('express');
const app = express();
const sitesRoute = require('./src/routes/sites');
const db = require('./src/config/db');

app.use(express.json());
app.use('/api/sites', sitesRoute);

// Conexión DB
db.connect();

module.exports = app;
