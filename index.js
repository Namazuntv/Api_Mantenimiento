const express = require('express');                                              // Importa el framework Express
const app = express();                                                           // Inicializa la aplicación Express
const mantenimientoRuta =  require('./ruta/mantenimientoRuta');               // Importa las rutas

app.use(express.json()); // Middleware para interpretar JSON en el cuerpo de la petición
app.use('/api', mantenimientoRuta); // Usa las rutas que empiezan con /api

const PORT = process.env.PORT || 3000; // Define el puerto del servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`); // Mensaje al iniciar el servidor
});
