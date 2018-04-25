const letConst = require("../src/ej4");

test(`Ejercicio 4: \`letConst(lista)\` debe retornar una lista con los valores
'let', 'const' ó 'letConst ó un número, según corresponda'`, () => {
  expect(letConst([3])).toEqual(["let"]);
  expect(letConst([5])).toEqual(["const"]);
  expect(letConst([0])).toEqual([0]);
  expect(letConst([3, 5])).toEqual(["let", "const"]);
  expect(letConst([1, 3])).toEqual([1, "let"]);
  expect(letConst([1, 3, 5])).toEqual([1, "let", "const"]);
  expect(letConst([6, 9, 15, 17])).toEqual(["let", "let", "letConst", 17]);
  expect(letConst([])).toBe(null);
});
