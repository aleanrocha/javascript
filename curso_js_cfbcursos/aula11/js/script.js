/*

======================
Operador Spreed ...
======================

O operador spreed significa espalhar ou seja ele basicamente quebra um array ou um conjunto de 
elementoa e devolver elemento a elemento 

*/
 
// let n1 = [1, 4, 7, 23]
// let n2 = [5, 9, '20', true]
// let n3 = [...n1,...n2]

// console.log('n1: ' + n1)
// console.log('n2: ' + n2)
// console.log('n3: ' + n3)

/*

const jogador1 = {nome:'Brabo', poder:'fogo', vida:5, velocidade:8}
const jogador2 = {nome:'Brabo2', poder:'gelo', vida:3, impacto:7}
const jogador3 = {...jogador1,...jogador2}

//console.log('jogador1: ' + jogador1)
//console.log('jogador2: ' + jogador2)

console.log('jogador3: ' + jogador3)

*/

/*
const soma = (v1,v2,v3)=> {
    return v1+v2+v3
}
//console.log(soma(5,5,5))

// espalha um valor para cada parâmetro de entrada da minha função 
let valores = [5,5,5]
console.log(soma(...valores))

*/

// retorna um [object HTMLCollection]
const objs1 = document.getElementsByTagName('div')

// retorna um array de elementos HTML
const objs2 = [...document.getElementsByTagName('div')]

console.log(objs1)
console.log(objs2)

/*
obj1.forEach(element => {
    console.log(element)
    element.style.color = 'red'
}) // erro pois é um [object HTMLCollection]
*/

objs2.forEach(element => {
    console.log(element)
    element.style.color = 'red'
}) // array 