// Substituindo elementos

const container = document.querySelector(".container")

const el = document.createElement("p")

el.appendChild(document.createTextNode("Este é um paragráfo de exemplo."))
el.classList = "pa"
container.appendChild(el)


// selecionar o elemento que quero trocar

const paragrafo = document.querySelector(".pa")

const el2 = document.createElement("p")
el2.appendChild(document.createTextNode("Este elemento foi modificado via JavaScript."))

// troca o elemento

container.replaceChild(el2, paragrafo)

