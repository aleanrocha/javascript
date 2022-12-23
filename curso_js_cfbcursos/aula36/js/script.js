/*
Entendendo a relação do DOM em javascript 
*/

const box1 = document.querySelector('#caixa1')
const all_courses = document.querySelectorAll('.curso')
const cs1 = document.querySelector('#c1')

// verifica se o elemento possui filho

console.log('-------------------')

console.log(box1.hasChildNodes())

if (box1.hasChildNodes == true) {
    console.log('Possui filho!')
} else {
    console.log('Não possui filho!')
}

console.log('-------------------')


console.log('###################')


console.log('-------------------')

console.log(all_courses[0].hasChildNodes())
console.log(all_courses[0].childNodes)

/*
if (all_courses[0].children.length > 0) {
    console.log('Sim possui')
} else {
    console.log('Não Possui')
}
*/

// utilizando o condição ternária

console.log(all_courses[0].children.length > 0 ? 'Sim possui' : 'Não possui')

console.log('-------------------')

// console.log(box1.firstElementChild)
// console.log(box1.lastElementChild)

console.log(cs1.parentNode.style.backgroundColor = 'lightcyan')
