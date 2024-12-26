const validar = (req, res, next) => {
    const currentHour = new Date().getHours();
    if (currentHour >= 12 && currentHour < 24) {
      next();
    } else {
      res.locals.mensaje = `Aún no es la hora, espera hasta las 12:00 para entrar`;
      return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
    }
  };
  
  module.exports = validar;
  