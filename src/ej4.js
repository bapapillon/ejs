/*
 * Ejercicio 4:
 * Completar la función `letConst(lista)`,
 * que recibe un array de números y retorna una lista con los valores definidos a continuación:
 *  1. Si lista[i] es múltiplo de 3 (pero no de 5), el valor en la lista resultado 'let'
 *  2. Si lista[i] es múltiplo de 5 (pero no de 3), el valor en la lista resultado 'const'
 *  3. 2. Si lista[i] es múltiplo de 3 y 5, el valor en la lista resultado 'letConst'
 *  4. En cualquier otro caso, guardamos el mismo valor lista[i] en la lista resultado
 *
 * Ejemplos:
 *  letConst([3, 5, 6, 15]) => ['let', 'const', 'let', 'letConst']
 *  letConst([1]) => [1]
 *  letConst([1, 3, 15]) => [1, 'let', 'letConst']
 * Además, si la lista que recibe está vacía, deberá retornar `null`: `letConst([])` => null

 * TEST: `npm test -- ej4`
 **/

function letConst(lista) {
  // COMPLETAR
}

// <--- NO TOCAR! --->
module.exports = obtenerElMinimoDeLaLista;
