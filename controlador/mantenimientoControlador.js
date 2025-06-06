const { calcularCiclos, calcularMantenimientos } = require('../logica/mantenimientoLogica');

const calcularMantenimiento = (req, res) => {
  const { ciclo_inicio, ciclo_fin, tipo_recurrencia, cada } = req.body;

  // Validación básica
  if (!ciclo_inicio || !ciclo_fin || !tipo_recurrencia || !cada) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' });
  }

  let ciclos_mantenimiento = [];

  if (tipo_recurrencia === 'ciclos') {
    ciclos_mantenimiento = calcularCiclos(ciclo_inicio, ciclo_fin, cada);
  } else if (tipo_recurrencia === 'mantenimiento') {
    ciclos_mantenimiento = calcularMantenimientos(ciclo_inicio, ciclo_fin, cada);
  } else {
    return res.status(400).json({ error: 'tipo_recurrencia inválido' });
  }

  return res.status(200).json({ ciclos_mantenimiento });
};

module.exports = { calcularMantenimiento };
