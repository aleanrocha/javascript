/*
  Operadores Condicionais são instruções que
  podem determinar o fluxo de uma aplicação.
  IF
  ELSE IF
  ELSE
*/

// Operador if

let idade = 22
let idadeMinima = 18

if (idade >= idadeMinima) {
  console.log("Sua idade e de " + idade + " anos")
  console.log("Já pode tirar a carteira de habilitação.")
}

if (idade < idadeMinima) {
  console.log("Sua idade e de " + idade + " anos")
  console.log("Você ainda não pode tirar sua carteira de habilitação.")
}