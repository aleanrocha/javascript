// Trabalhando com Rest e Spread

let nomes = [
    {
        nome: 'Bird'
    },
    {
        nome: 'Dog'
    },
    {
        nome: 'Lion'
    }

]

// Basicamente pega os nomes do array anterior
// e adiciona no início do array nomes2

let nomes2 = [...nomes,
    {
        nome: 'Cat'
    },
    {
        nome: 'Alligator'
    }
]
console.log('-------------- SPREAD ---------------')
console.log(nomes2)

// utilizando REST

function testes(...numeros) {
    console.log(numeros)
}
console.log('-------------- REST ---------------')

// ficam disponíveis em formato de array
testes(1,2,3,4,5,6,[...nomes2])