// Alterando o DOM com for

let body = document.getElementsByTagName("body")

let arr = ["LINGUAGEM","PROGRAMAÇÃO","JAVASCRIPT","ECMASCRIPT","PADRONIZADA"]

let listaUl = document.createElement("ul")

for (let index = 0; index < arr.length; index++) {
  let listaLi = document.createElement("li")
  let textLi = document.createTextNode(arr[index])
  
  listaLi.appendChild(textLi)
  listaUl.appendChild(listaLi)
}

body[0].appendChild(listaUl)
