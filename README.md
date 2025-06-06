# Api_Mantenimiento - Backend
.
.
API de Planificación de Mantenimiento
.
.
Este proyecto es una API RESTful desarrollada en **Node.js con Express** para calcular ciclos de mantenimiento según diferentes tipos de recurrencia.
.
.
api_mantenimiento/
.
.---controlador/
  .------------mantenimientoControlador.js # Lógica del controlador principal
.
.
.---logica/
  .-----------mantenimientoLogica.js # Funciones para cáculos de mantnimiento
.
.
.---ruta/
  .-----------mantenimientoRuta.js # Rutas de la APi
.
.
.----index.js # Entrada principal del servidor
.
.
.---package.json # Configuración del proyecto y dependencias
.
.
.

2. instalacion de dependencias:
   - npm install express
     
3. Ejecucion del servidor:
   - npm run dev

.
.
.

4. Endpoints

Post /api/mantenimiento

ciclos de mantenimiento según el tipo de recurrencia.


Cuerpo de la peticion

{
  "ciclo_inicio": 1,
  "ciclo_fin": 20,
  "tipo_recurrencia": "ciclos", // o "mantenimiento"
  "cada": 5
}

-Tipos de Recurrencia
  -"ciclos": Calcula en intervalos fijos (cada).
  -"mantenimiento": Cuenta ciclos impares hasta alcanzar el valor de cada.

  Respuesta idonea

{
  "ciclos_mantenimiento": [1, 6, 11, 16]
}


5. Logica
  - calcularCiclos: Genera una lista de números desde inicio hasta fin, sumando de cada en cada iteración.
  - calcularMantenimientos: Cuenta solo los ciclos impares, y cada vez que se alcanza el número indicado en cada, se registra el ciclo.


Tecnologías Utilizadas

- Node.js
- Express.js

Autor
-  Nicolas Tovar Vanegas
-  Tecnólogo en Automatización y Desarrollador Backend Junior

  

  
