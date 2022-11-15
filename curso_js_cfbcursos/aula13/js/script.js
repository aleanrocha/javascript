'use strict'

/*
Basicamente o switch avalia um expressão e compara
com os cases que esta programado para dar o  resultado
*/
let colocacao = 5

switch(colocacao) {
    // o uso do break é obrigatório
    // para parar a execução 
    case 1:     
        console.log('Primeiro lugar!')
        break
    case 2: 
        console.log('Segundo lugar!')
        break
    case 3:
        console.log('Terceiro lugar!')
        break
    case 4: case 5: case 5:
        console.log('Premio de participação!')
        break
    default:
        console.log('Não subiu ao pódio.')
        break;
}