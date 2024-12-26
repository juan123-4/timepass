const express = require('express');
const router = express.Router();
const horaMiddleware = require('../middlewares/horamiddleware');

router.use(horaMiddleware);

router.get('/', (req, res) => {
  const mensaje = req.query.mensaje || '';
  res.send(`
   
    <style>
     button a 
    { color: red; text-decoration: none; }
      </style>
    <h1>Bienvenido</h1>
    <p>La hora actual es: ${req.dateType}</p>
    <p>${mensaje}</p>
    <button><a href="/endroute">Entrar</a></button>
  `);
});

module.exports = router;
