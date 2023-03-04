/*
  Os operadores lógicos realizam comparações
  para que seja retornado um true ou false
  decidindo o fluxo da aplicação.
  
  Os principais operadores lógicos são:
  AND - ( && )
  OR  - ( || )
  NOT - ( !  )
*/

// OR

// Só uma das expressões precisa ser
// verdadeira para ser executada 

let idade = 18
let nome = "João"

if (nome == "Pedro" || idade == 18) {
  console.log("Pode entrar na aula de esgrima")
} else {
  console.log("Não pode entrar na aula de esgrima")
}

if (10 > 6 || 5 > 6 && (7 == 9)) {
  console.log("Verdadeiro!")
} else {
  console.log("Falso!")
}