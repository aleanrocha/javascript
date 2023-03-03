/*
  Operadores Condicionais são instruções que
  podem determinar o fluxo de uma aplicação.
  IF
  ELSE IF
  ELSE
*/

// Operador else if e else

let nome = "Zezinho"

if (nome == "Bruno") {
  console.log("O nome é Bruno.")
} else if (nome == "Zezinho") {
  console.log("O nome é Zezinho.")
} else if (nome == "João") {
  console.log("O nome é João.")
} else {
  console.log("Não foi pssível indentificar seu nome.")
}

let idade = 18 

if (idade >= 18) {
  console.log("Você pode entrar na festa.")
} else {
  console.log("Você não pode entrar na festa.")
}
