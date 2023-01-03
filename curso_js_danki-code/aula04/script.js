// condições - Basicamente as condições servem para podermos
// fazer verificações no nosso codigo

var nome = 'Javascript'
var numero = 50

if (nome == 'EcmaScript') {
    console.log('Verdadeiro')
} else if (nome == 'Javascript') {
    console.log( 'Entrou no else if - VERDADEIRO')
} else {
    console.log('Entrou no else - Nome não encontrado!')
}

// > - MAIOR
// < - MENOR 
// >= - MAIOR OU IGUAL
// != - DIFERENTE

// && - E 
// || - OU

/*
if (numero >= 50) {
    console.log('Número maior ou igual a 50')
} else {
    console.log('Número menor que 50')
}
*/

/*
if (numero <= 50 && nome == 'Javascript') {
    console.log('Número maior que 50 e nome igual a javascript')
} else {
    console.log('Dados não correspondentes')
}
*/

if (numero != 50 || nome != 'Javascript') {
    console.log('Verdade')
} else {
    console.log('Dados não correspondentes')
}