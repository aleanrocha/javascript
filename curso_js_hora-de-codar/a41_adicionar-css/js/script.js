// Adicionando css

let title = document.querySelector("h1")

let paragraph = document.querySelector("p")

let list1 = document.querySelector("ul#lista1")

let list2 = document.querySelector("ul#lista2")

// adicionar estilo

// css => background-color
// js  => backgroundColor

title.style.color = "darkblue"

paragraph.style.color = "gray"

// adicionar vários estilos

list1.style.cssText = "width: 80px; background-color: cyan; padding: 20px 60px;"

list2.style.cssText = "width: 80px; background-color: lightblue; padding: 20px 60px;"