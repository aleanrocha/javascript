// Crinado elementos via JS

let body = document.querySelector("body")

// criar um novo elemento div
let div = document.createElement("div")

// adiciona o novo elemento div no body
body.appendChild(div)

let p = document.createElement("p")
let txtp = document.createTextNode("Este texto foi criado via javascript")
p.appendChild(txtp)
div.appendChild(p)

let ul = document.createElement("ul")

for (let index = 1; index < 8; index++) {
  let lis = document.createElement("li")
  let txt = document.createTextNode("item " + index)
  lis.appendChild(txt)
  ul.appendChild(lis)
}

div.appendChild(ul)