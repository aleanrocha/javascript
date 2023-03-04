/*
  O objeto NUMBER, pai dos números, contém métodos
  muito úteis para trabalhar com números em JS, a maioria
  dos tipos de dado também tem um objeto pai como:
  STRING
  OBJECT
  ARRAY
*/

// método parseFloat => 10.0

// Transforma uma strig em um número float

let parseF = parseFloat("10.99")

console.log(parseF)
console.log(typeof parseF)
console.log(Number.parseFloat("555.555"))
console.log(typeof Number.parseFloat("555.555"))

console.log("----------------------")

// método parseInt

// Transforma um valor em um número inteiro

let parseI = parseInt("15.67")
console.log(parseI)
console.log(Number.parseInt(24.76))

console.log("----------------------")

// método toFixed

// Limita as casas decimais de um número

let n1 = 1250.7654
console.log(n1)
console.log(n1.toFixed(2))

console.log("----------------------")

// método isNaN

// verifica se possui um número

let teste = "blablabla"
console.log(teste)
console.log("Não é um número: " + isNaN(teste))

let teste2 = "22"
console.log(teste2)
console.log("Não é um número: " + isNaN(teste2))

console.log("----------------------")

// MAX_VALUE e MIN_VALUE

// Números máximos e mínimos que são aconselhados
// a trabalhar com javascript

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
