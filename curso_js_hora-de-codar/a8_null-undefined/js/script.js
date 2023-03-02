/*
  No javascript existe vários tipos de dados, os mais comuns são:
  NUMBER
  STRING
  BOOLEAN
  NULL
  UNDEFINED
*/

// Utilizando BOOLEAN

/*
  O NULL é o UNDEFINED também são considerados como tipos de dados.
  NULL => é um tipo de dado que representa um valor.
  UNDEFINED => é um tipo de dado para uma variável com valor não atribuído
*/

// NULL

let nome = null

console.log(nome)

nome = "João"

console.log(nome)
console.log(typeof nome)

// UNDEFINED

let sobrenome 

console.log(sobrenome)

sobrenome = "silva"

console.log(sobrenome)

// Hoisting => Içamento

/*

  Conceitualmente, por exemplo, uma definição estrita de elevação sugere que as declarações de variáveis e funções são fisicamente movidas para o topo do seu código, mas isso não é realmente o que acontece. Em vez disso, as declarações de variável e função são colocadas na memória durante a fase de compilação, mas permanecem exatamente onde você as digitou no seu código.

*/

console.log(num)

let num 

console.log(num)

num = 200

console.log(num)