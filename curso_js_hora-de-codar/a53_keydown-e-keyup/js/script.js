/*

  Por meio do JavaScript podemos mapear algumas 
  acões dos usuários, que chamamos de eventos,
  como por exemplo o movimento do mouse, click,
  mouse entrando ou saindo de um elemento, carrehgamento
  da página e etc. Com isso podemos então criar comportamentos 
  interessantes como a animação de menu abrindo e fechando.

*/

// keydown => ativado quando uma tecla é pressionada

/*

document.addEventListener("keydown", (e) => {
  console.log(e.key)

  alert(`Você prrssionou a tecla => ${e.key}`)
})

*/

// keyup => A tecla volte a posição normal
// pressiona e solta

/*

document.addEventListener("keyup", (e) => {
  console.log(e.key)
  console.log("soltou o " + e.key)
})

*/



// Prática 

const teclado = [...document.querySelectorAll(".teclado input")]

for (let index = 0; index < teclado.length; index++) {
  const element = teclado[index];
  element.style.cssText = "padding: 8px; min-width: 80px; border: none;"
}

document.addEventListener("keyup", (e) => {
  console.log(e.key)
  teclado.map((inp) => {
    if (e.key === inp.value) {
      inp.style.background = "green"
      inp.style.color = "white"
      inp.style.fontWeight = "bold"
    }
  })
})