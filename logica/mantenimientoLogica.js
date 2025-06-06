const calcularCiclos = (inicio, fin, cada) => {
  const resultado = [];
  for (let i = inicio; i <= fin; i += cada) {
    resultado.push(i);
  }
  return resultado;
};

const calcularMantenimientos = (inicio, fin, cada) => {
  const resultado = [];
  let contador = 0;

  for (let i =inicio; i <= fin; i++) {
    if (i % 2 !== 0)  contador ++; // ciclo impar =      contador 

    if (contador  === cada) {
      resultado.push (i);
       contador = 0;
    }
  }


  
  return resultado;
};

module.exports = {
  calcularCiclos,
  calcularMantenimientos
};
