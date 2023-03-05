
// innerHTML

let p = document.querySelector("p")
p.innerHTML = "Conteúdo alterado via JAVASCRIPT"

// textContent

let lis = document.querySelectorAll("#lista1 li")

for (let index = 0; index < lis.length; index++) {
  const element = lis[index];
  element.textContent = "javascript"
}

let lis2 = document.querySelectorAll("#lista2 li")[1].textContent = "ALTERADO"

