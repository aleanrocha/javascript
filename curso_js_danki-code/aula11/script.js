// Exercício 03

// Aplicação Calculadora Dinâmica

// pegar o número inicial
// pegar o sinal 
// pegar o número final

let numeroInicial = prompt('Digite o Primeiro número?')

let sinal = prompt('Digite o sinal da operação: ex[+, -, x, /]')

while (sinal != '+' && sinal != '-' && sinal != 'x' && sinal != '/') {
    alert('Por favor, informe um sinal válido!!')
    sinal = prompt('Digite o sinal da operação: ex[+, -, x, /]')
}

let numeroFinal = prompt('Digite outro número?')

// transformando de string para number
numeroInicial = parseInt(numeroInicial)
numeroFinal = parseInt(numeroFinal)

let resultadoFinal = 0

if (sinal == '+') {
    resultado = numeroInicial + numeroFinal
} else if (sinal == '-') {
    resultado = numeroInicial - numeroFinal
} else if (sinal == 'x') {
    resultado = numeroInicial * numeroFinal
} else if (sinal == '/') {
    resultado = numeroInicial / numeroFinal
}

alert(numeroInicial + ' ' + sinal + ' ' + numeroFinal + ' = ' + resultado)

