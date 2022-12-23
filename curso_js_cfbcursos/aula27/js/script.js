/*
A método MAP tem a função de percorrer arrays 
ou coleções, vamos precisar ulitizar esse método
quando precisarmos trabalhar com elemento por
elenento de uma coleção 
*/

const cursos = ["HTML","CSS","JAVASCRIPT","REACT"]

/*

cursos.map((elemento,indice) => {
    console.log(`Curso: ${elemento} - Posição: ${indice}.`)
})

*/

/*
const c = cursos.map((el,i) => {
    //return `Curso: ${el} - Posição: ${i}.`
    return `Curso: ${el} - Posição: ${i}.`
})

console.log(c)
*/




/*
// pegando os elementos do HTML com método MAP

let el = document.getElementsByTagName('div')
el = [...el]
el.map((el) => {
    el.style.color = 'blue'
})
*/


// outra forma

// retorna cada um dos elementos da coleção selecionada
/*
const el = document.getElementsByTagName('div')
const val = Array.prototype.map.call(el,({innerHTML}) => innerHTML)

console.log(val)
*/

const converterInt = (e) => parseInt(e)
let num = ['1','2','3','4','9'].map(converterInt)
console.log(num)

const dobrar_el = (val) => val*2
let num2 = ['2','4','16','50'].map(dobrar_el)
console.log(num2)

