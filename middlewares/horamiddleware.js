const middleware = (req, res, next) => {
    const now = new Date();
    const hora = now.getHours();
    const minutos = now.getMinutes();
    const segundos = now.getSeconds();
    const everything = `${hora}:${minutos}:${segundos}`;
    req.dateType = everything;
    next();
  };
  
  module.exports = middleware;
  