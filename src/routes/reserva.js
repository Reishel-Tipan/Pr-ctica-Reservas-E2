const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { crearReserva } = require('../controllers/reservaController');

// Ruta para verificar servicio
router.get('/', (req, res) => {
  res.status(200).json({ msg: 'Servicio reservas activo' });
});

// Ruta protegida para crear reserva
router.post('/', auth, crearReserva);

module.exports = router;
