const saludar = require('../src/ej1');

test("Ejercicio 1: saludar() debe retornar el string 'hola'", () => {
  expect(saludar()).toBe('hola');
});
