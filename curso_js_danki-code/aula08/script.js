// forEach -  é um tipo de estrutura de repetição,
// só que ele é disponível para a manipulação dos elementos de um array por exemplo.

let a_nome = ['Guilherme','joão','Bruno','Felipe']

// forma tradicional

/*
for(let i = 0; i < a_nome.length; i++) {
    console.log(a_nome[i])
}
*/


// Utilizando o forEach
a_nome.forEach((el,indice) => {
    console.log(el)
    console.log(indice)
})