// funções - Basicamente as funções são trechos
// de codigos que podemos chamar a qualquer momento

function testes() {
    // esperando para ser chamada
    console.log('Chamando a função testes')
}
testes()

// funções com parâmetros
function testes2(nome, idade) {
    console.log('Seu nome é ' + nome + ' e sua idade é ' + idade)
}
testes2('Zezinho',27)
testes2('Guilherme',29)

// trabalhando com funções com retorno
function pegarNome() {
    return 'JavaScript'

    // depois que a função retorna algo
    // tudo que vem depois é iginorado

    console.log('Depois do return')
}
var nome = pegarNome()
console.log(nome)


function pegarNome2(parametro) {
    if (parametro == 1) {
        return 'Brasil'
    } else {
        return 'Outro nome'
    }
}
var nome2 = pegarNome2(1)
console.log(nome2)
