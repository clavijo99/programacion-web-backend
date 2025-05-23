const db = require('../config/db');

const crearContacto = async ({ nombre, email, telefono, mensaje }) => {
  const query = `
    INSERT INTO contacto (nombre, email, telefono, mensaje)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;

  const values = [nombre, email, telefono, mensaje];

  const { rows } = await db.query(query, values);
  return rows[0];
};

module.exports = { crearContacto };
