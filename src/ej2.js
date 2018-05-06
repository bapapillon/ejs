/**
 * Ejercicio 2:
 * escribir la función `mostrarPares(lista)` que recibe un array
 * de números y retorna una lista con los pares
 *
 * TEST: `npm test -- ej2`
 */

function mostrarPares(lista) {
  for(i = 0; i < lista.length; i++) {
    if (i%2 === 0) {
      return lista[i];
    }
  }
}

// <--- NO TOCAR! --->
module.exports = mostrarPares;
