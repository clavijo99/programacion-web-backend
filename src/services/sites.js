const db = require('../config/db');

exports.getAllSites = async () => {
    try {
        const query = 'SELECT * FROM sites';
        const response = await db.query(query);
        return response.rows;
    } catch (error) {
        throw new Error('Error fetching sites: ' + error.message);
    }
}

exports.getSiteById = async (id) => {
    try {
        const query = 'SELECT * FROM sites WHERE id = $1';
        const response = await db.query(query, [id]);
        return response.rows[0];
    } catch (error) {
        throw new Error('Error fetching site: ' + error.message);
    }
}


// completar la funcion con los datos faltantes
exports.createSite = async (site) => {
    try {
        const query = 'INSERT INTO sites (name, location) VALUES ($1, $2) RETURNING *';
        const response = await db.query(query, [site.name, site.location]);
        return response.rows[0];
    } catch (error) {
        throw new Error('Error creating site: ' + error.message);
    }
}