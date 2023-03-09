/*
  Podemos com estas funções criar acões no software que
  executam depois de um tempo ou de tempos em tempos
  um dos argumentos dessas funções é uma CALLBACK function
*/

// setTimeout
// executa depois de um determinado tempo

console.log("Antes do setTimeout")

setTimeout(() => {
  console.log("Testando o setTimeout")
}, 3000)

console.log("Depois do setTimeout")


// setInterval
// executa um bloco de codigo infinitamente com base em um determinado tempo

setInterval(() => {
  console.log("Testando setInterval!")
}, 4000)
