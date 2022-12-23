/*
getElemetsByClassName - pega os elementos
através de uma classe
*/

// retorna uma coleção html
//const cursosTodos = document.getElementsByClassName('curso')
//console.log(cursosTodos)


// retorna um array com todos os cursos
const cursosTodos = [...document.getElementsByClassName('curso')]

console.log(cursosTodos)

// retorna um array com os cursos da classe cs1
const cs1 = [...document.getElementsByClassName('cs1')]

console.log(cs1)

// retorna um array com os cursos da classe cs2
const cs2 = [...document.getElementsByClassName('cs2')]

console.log(cs2)

cursosTodos.map((el) => {
    el.style.fontSize = '1em'
    el.style.fontWeight = 'bolder'
})

cs1.map( el => {
    el.style.color = 'darkblue'
})

for (el of cs2) {
    el.style.color = 'white'
    el.style.fontWeight = 'normal'
    el.style.textTransform = 'lowercase'
}
