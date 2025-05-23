CREATE TABLE IF NOT EXISTS sites (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    imagen TEXT,
    calificacion NUMERIC(2, 1),  -- ejemplo: 4.5
    latitud DECIMAL(9,6),
    longitud DECIMAL(9,6),
    comentarios TEXT,
    ciudad VARCHAR(100),
    barrio VARCHAR(100),
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS contacto (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    telefono VARCHAR(20),
    mensaje TEXT NOT NULL,
    enviado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


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
) VALUES (
    'Bioparque Los Ocarros',
    'El Bioparque Los Ocarros es un parque zoológico ubicado a 3 kilómetros de Villavicencio, en la vía a Restrepo. Cuenta con aproximadamente 1.200 animales de 193 especies diferentes, todas nativas de la región, y está dedicado a la conservación de la fauna de los Llanos Orientales.',
    'https://upload.wikimedia.org/wikipedia/commons/6/6b/Bioparque_Los_Ocarros.jpg',
    4.5,
    4.1425,
    -73.5970,
    'Ideal para visitar en familia y conocer la biodiversidad llanera.',
    'Villavicencio',
    'Vía a Restrepo'
);
