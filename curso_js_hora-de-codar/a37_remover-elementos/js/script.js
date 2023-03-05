/*
  Removendo elmentos em JS
  Temos como remover o elemento e também um elemento filho
*/

// removeChild()

// seleciona o elemento pai
let body = document.querySelector("body")

// seleciona o elemento filho que será removido
let p = document.querySelector("p")

// remove o elemento filho
body.removeChild(p)


// remove()

// seleciona o elemento que será removido

let lista1 = document.getElementById("lista1")
let lista2 = document.getElementById("lista2")

// remove o elemento
lista1.remove()
lista2.remove()