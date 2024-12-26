const express = require('express');
const router = express.Router();
const validarHora = require('../middlewares/validarHora');

router.use(validarHora);

router.get('/', (req, res) => {
  res.send(`
    <h1>¡Bienvenido a Endroute!</h1>
    <p>Estás en la ruta final</p>
  `);
});

module.exports = router;
