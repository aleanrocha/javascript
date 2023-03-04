/*
  Os operadores lógicos realizam comparações
  para que seja retornado um true ou false
  decidindo o fluxo da aplicação.
  
  Os principais operadores lógicos são:
  AND - ( && )
  OR  - ( || )
  NOT - ( ! )
*/

// AND 

let idade = 18
let nome = "Pedro"

if (idade == 18 && nome == "Pedro") {
  console.log("O pedro pode entrar na aula de esgrima")
} else {
  console.log("Esse não é o pedro")
}

if (5 > 4 && 3 < 8 && 9 >= 7) {
  console.log("Passou")
}

if ((5 == 5 && 2 <= 5) && true) {
  console.log("Tudo certo! PASSOU!")
}