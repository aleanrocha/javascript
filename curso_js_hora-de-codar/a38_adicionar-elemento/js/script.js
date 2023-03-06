// Inserindo elementos

// selecionar elementos

let container = document.querySelector(".container")

// criar os novos elementos

let p = document.createElement("p")
let div1 = document.createElement("div")
let div2 = document.createElement("div")

// adicionando texto ao elemento p

p.appendChild(document.createTextNode("Texto criado dinamicamente com JS"))

// atribuindo classes as novas divs criadas

div1.classList = "div1"
div2.classList = "div-before"

// adicionando p ao container

container.appendChild(p)

// adicionando a primeira div criada ao container

container.appendChild(div1)

// seleciona a nova div criada

let divCriada = document.querySelector(".div1")

// adicionando uma nova div antes da div criada anteriormente

container.insertBefore(div2, divCriada)





