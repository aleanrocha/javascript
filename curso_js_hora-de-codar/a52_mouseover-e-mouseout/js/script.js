/*

  Por meio do JavaScript podemos mapear algumas 
  acões dos usuários, que chamamos de eventos,
  como por exemplo o movimento do mouse, click,
  mouse entrando ou saindo de um elemento, carrehgamento
  da página e etc. Com isso podemos então criar comportamentos 
  interessantes como a animação de menu abrindo e fechando.

*/

// mouseover => mouse passa em cima do elemento

let h1 = document.querySelector("h1")
let h3 = document.querySelector("h3")
let p = document.querySelector("p")

h1.addEventListener("mouseover", () => {
  h1.style.color = "purple"
})

// mouseout => mouse sai de cima do elemento

h1.addEventListener("mouseout", () => {
  h1.style.color = "black"
})

// Prática

p.style.maxWidth = "500px"

h3.addEventListener("mouseover", () => {
  p.style.opacity = 1
  h3.style.color = "gray"
})

h3.addEventListener("mouseout", () => {
  p.style.opacity = 0
  h3.style.color = "black"
})