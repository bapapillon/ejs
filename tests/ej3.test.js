const obtenerElMinimoDeLaLista = require("../src/ej3");

test("Ejercicio 3: `obtenerElMinimoDeLaLista(lista)` debe retornar el elemento mínimo de la lista", () => {
  expect(obtenerElMinimoDeLaLista([1, 2, 3])).toBe(1);
  expect(obtenerElMinimoDeLaLista([2, 3, 1])).toBe(1);
  expect(obtenerElMinimoDeLaLista([3, 1, 2])).toBe(1);
  expect(obtenerElMinimoDeLaLista([1, 2, 3])).toBe(1);
  expect(obtenerElMinimoDeLaLista([1, 2, -3])).toBe(-3);
  expect(obtenerElMinimoDeLaLista([])).toBe(null);
});
