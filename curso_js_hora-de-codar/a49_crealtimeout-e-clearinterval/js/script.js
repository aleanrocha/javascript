/*
  Podemos por um fim em setTimeout e setInterval por meio
  destes dois métodos CLEARTIMEOUT e CLEARINTERVAL então após
  determinada condição os times não serão mais executados.
*/

// clearTimeout 

let x = 0

let myTimeout = setTimeout(() => {
  console.log("O x é 0")
}, 2000);

x = 5

if (x > 0) {
  clearTimeout(myTimeout)
  console.log("O x passou de 0")
}

// clearInterval

let myInterval = setInterval(() => {
  console.log("Imprimindo o interval")
}, 500)

setTimeout(() => {
  console.log("Não precisamos mais do intervalo")
  clearInterval(myInterval)
}, 2000)