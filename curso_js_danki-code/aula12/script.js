// Tranalhando com OBJETOS em JavaScript

let obj = {
    nome: 'Zezinho',
    idade: 23,
    profissao: 'Progamador'
}

// chamando o objeo

alert(obj.nome)
alert(obj.idade)
alert(obj.profissao)

// posso também utilizar objetos dentro de um array

let pessoas = [
    {
        nome: 'Alean',
        profissao: 'Desenvolvedor',
        solteiro: true
    },
    {
        nome: 'Guilherme',
        profissao: 'Progamador',
        solteiro: false
    }
]

console.log(pessoas[0].nome)
console.log(pessoas[0].profissao)
console.log(pessoas[0].solteiro)

console.log('-----------------------------')

console.log(pessoas[1].nome)
console.log(pessoas[1].profissao)
console.log(pessoas[1].solteiro)