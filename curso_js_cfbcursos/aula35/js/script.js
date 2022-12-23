/*
Entendendo a relação do DOM em javascript 
*/

const box1 = document.querySelector('#caixa1')
const all_courses = document.querySelectorAll('.curso')

// pega o root - raiz
console.log(document.getRootNode())
console.log(all_courses[0].getRootNode())
console.log(all_courses[0].ownerDocument)

// pega todos elementos da coleção 
console.log(box1.children)

// pega o primeiro elemento da coleção
console.log(box1.firstChild)

// pega o último elemento da coleção
console.log(box1.lastChild)
