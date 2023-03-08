/*
  Podemos alterar os atributos via Js e Dom
  Por exemplo alterar o atributo alt de uma imagem
  Ou até um src de uma imagem
  Todos os atributos podem ser alterados via JS
*/

let container = document.querySelector("main div")

// adicionando um atributo a minha div

container.setAttribute("class", "container")

let img = document.querySelector(".container img")

let button = document.querySelectorAll("button")

for (let index = 0; index < button.length; index++) {
  const element = button[index];
  element.setAttribute("id", "btn"+(index+1))
  
}

let acender = document.getElementById("btn1")

let apagar = document.getElementById("btn2")

apagar.setAttribute("disabled", "disabled")

acender.addEventListener("click", () => {
  img.setAttribute("src", "https://i.stack.imgur.com/ybxlO.jpg")
  img.setAttribute("alt", "Imagem de uma lampada acesa")
  acender.setAttribute("disabled", "disabled")
  apagar.removeAttribute("disabled")
})

apagar.addEventListener("click", () => {
  img.setAttribute("src", "https://i.stack.imgur.com/b983w.jpg")
  apagar.setAttribute("disabled", "disabled")
  acender.removeAttribute("disabled")
})