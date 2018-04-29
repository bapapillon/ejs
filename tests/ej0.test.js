const boomerang = require('../src/ej0');

test('Ejercicio 0: `boomerang(x) debe retornar lo mismo que recibe por parametro', () => {
  expect(boomerang('x')).toBe('x');
  expect(boomerang(0)).toBe(0);
  expect(boomerang(true)).toBe(true);
  expect(boomerang([1])).toEqual([1]);
});
