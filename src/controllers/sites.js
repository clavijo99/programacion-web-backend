const sitesService = require('../services/sites');

exports.listSites = async (req, res) => {
    try {
        const sites = await sitesService.getAllSites();
        res.status(200).json(sites);
    } catch (error) {
        console.error('Error fetching sites:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

exports.getSiteById = async (req, res) => {
    const { id } = req.params;
    try {
        const site = await sitesService.getSiteById(id);
        if (!site) {
            return res.status(404).json({ message: 'Site not found' });
        }
        res.status(200).json(site);
    } catch (error) {
        console.error('Error fetching site:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


exports.createSite = async (req, res) => {
  try {
    const { nombre, descripcion, calificacion, latitud, longitud, comentarios, ciudad, barrio } = req.body;
    const imagen = req.file ? req.file.filename : null;

    console.log('data:', req.body , req.file);
    // Validar que se haya proporcionado una imagen
    if (!imagen) {
      return res.status(400).json({ mensaje: 'Se requiere una imagen para crear el sitio turístico.' });
    }

    // Llamar al servicio para crear el sitio
    const nuevoSitio = await sitesService.createSite({
      nombre,
      descripcion,
      imagen,
      calificacion,
      latitud,
      longitud,
      comentarios,
      ciudad,
      barrio
    });

    res.status(201).json(nuevoSitio);
  } catch (error) {
    console.error('Error al crear el sitio turístico:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};
