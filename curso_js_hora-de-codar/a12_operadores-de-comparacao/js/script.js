/*
  São comumente utilizados nas estruturas de condição
  para fazer verificações. A partir de uma expressão
  de comparação podemos obter um true ou false

  == igual
  > maior
  < menor
  >= maior ou igual
  <= menor ou igual
  != diferente

*/

let idade = 19
let idadeMinima = 18

if (idade == idadeMinima) {
  console.log("Você tem " + idade + " anos.")
  console.log("Você já pode se alistar no Exécito")
}

if (idade > idadeMinima) {
  console.log("Você tem " + idade + " anos.")
  console.log("Você já passou do tempo de se alistar no Exécito.")
  console.log("Aliste-se já e cumpra seu dever como cidadão BRASILEIRO!")
}

if (idade < idadeMinima) {
  console.log("Você tem " + idade + " anos.")
  console.log("Você ainda NÃO pode se alistar no Exécito")
}

// let num = 8

// if (num >= 10) {
//   console.log("Maior ou igual a 10")
// }

// if (num <= 9) {
//   console.log("Menor ou igual a 9")
// }