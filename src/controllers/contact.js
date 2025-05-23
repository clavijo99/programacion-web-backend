const contactoService = require('../services/contact');

exports.registrarContacto = async (req, res) => {
  try {
    const nuevoContacto = await contactoService.crearContacto(req.body);
    res.status(201).json({
      mensaje: 'Contacto registrado exitosamente',
      contacto: nuevoContacto,
    });
  } catch (error) {
    console.error('Error al registrar contacto:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

