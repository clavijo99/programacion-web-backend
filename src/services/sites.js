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
        const query = `
            INSERT INTO sites (
                nombre,
                descripcion,
                imagen,
                calificacion,
                latitud,
                longitud,
                comentarios,
                ciudad,
                barrio
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
            RETURNING *;
        `;
        const values = [
            site.nombre,
            site.descripcion,
            site.imagen,
            site.calificacion,
            site.latitud,
            site.longitud,
            site.comentarios,
            site.ciudad,
            site.barrio
        ];
        const response = await db.query(query, values);
        return response.rows[0];
    } catch (error) {
        throw new Error('Error creating site: ' + error.message);
    }
}

exports.detailSite = async (id) => {
    try {
        const query = 'SELECT * FROM sites WHERE id = $1';
        const response = await db.query(query, [id]);
        return response.rows[0];
    } catch (error) {
        throw new Error('Error fetching site detail: ' + error.message);
    }

}