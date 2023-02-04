// Exercício 02

// o prompt abre um campo para digitar algo

let anoNascimento = prompt('Qual o seu ano de nascimento?')

while (anoNascimento >= 2023 || anoNascimento < 1900) {
    alert('Por favor, informe seu ano de nascimento corretamente!')
    anoNascimento = prompt('Qual o seu ano de nascimento?')
}

let anoAtual = prompt('Qual é o ano atual?')


let idade = anoAtual - anoNascimento 

alert('Você tem ' + idade + ' anos.')

