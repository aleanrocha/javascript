/*
  Os operadores lógicos realizam comparações
  para que seja retornado um true ou false
  decidindo o fluxo da aplicação.
  
  Os principais operadores lógicos são:
  AND - ( && )
  OR  - ( || )
  NOT - ( !  )
*/

// NOT

// Muda o valor da expressão baseado no seu resultado

if (!true) {
  console.log("Passou")
} else {
  console.log("Não passou")
}

let nome = "João"

if (!(nome == "João")) {
  console.log("Olá, João!")
} else {
  console.log("Seu nome não é João.")
}
