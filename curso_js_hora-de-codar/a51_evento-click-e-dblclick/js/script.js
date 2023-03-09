/*

  Por meio do JavaScript podemos mapear algumas 
  acões dos usuários, que chamamos de eventos,
  como por exemplo o movimento do mouse, click,
  mouse entrando ou saindo de um elemento, carrehgamento
  da página e etc. Com isso podemos então criar comportamentos 
  interessantes como a animação de menu abrindo e fechando.

*/

// click

let btn = document.querySelector("button")
let h1 = document.querySelector("h1")

btn.style.padding = "10px"

btn.addEventListener("click", () => {
  alert("clicou")
  h1.style.fontFamily = "Arial, Helvetica, sans-serif"
  h1.style.color = "darkblue"
})

// double click

let btn2 = document.querySelector("#btn2")

btn2.style.padding = "10px"

btn2.addEventListener("dblclick", () => {
  alert("Clique duplo")
  btn2.style.background = "darkblue"
  btn2.style.color = "white"
  btn2.style.outline = "none"
  btn2.style.border = "none"
  btn2.style.borderRadius = "24px"
})