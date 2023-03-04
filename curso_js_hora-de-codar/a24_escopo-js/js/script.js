/*
  No javascript podemos ter vários escopos,
  o GLOBAL, que é iniciado em toda a aplicação,
  e os LOCAIS, que podem existir em várias instruções
  como as funções por exemplo.
*/


// Escopo Global

let n1 = 10

let n2 = 7

console.log(n1, n2)
console.log("-------------")


function teste() {

  // Escopo Local

  let x = 2
  let y = 1

  console.log(x, y)

  // acessando variável global
  console.log(n1)

}
teste()

// tentando acessar uma variável local 
// vai dar erro pois só serve para seu escopo

console.log(x)
