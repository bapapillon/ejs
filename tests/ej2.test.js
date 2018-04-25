const mostrarPares = require("../src/ej2.js");

test("Ejercicio 2: `mostrarPares(lista)` debe filtrar la lista que recibe y retornar sólo los pares", () => {
  expect(mostrarPares([0, 1, 2, 3, 4])).toEqual([0, 2, 4]);
  expect(mostrarPares([])).toEqual([]);
  expect(mostrarPares([-1, -3, -2, 0, 8])).toEqual([-2, 0, 8]);
});
