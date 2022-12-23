/*

    FILTER - O método filter consegue percorrer
    um array por exemplo e fazer uma determinada
    filtragem e retornar determinados elementos 
    do array

*/


const idades = [20,10,12,40,18,15,24,36,17,60,7]

/*

const maior_idade = idades.filter((valor)=>{
    if (valor >= 18) {
        return valor
    }
})
const menor_idade = idades.filter((valor)=>{
    if (valor < 18) {
        return valor
    }
})
console.log(maior_idade)
console.log(menor_idade)

*/


const maior_idade = idades.filter(filterMaiorIdade)
const menor_idade = idades.filter(filterMenorIdade)


// function filterMaiorIdade (valor,indice,array)

function filterMaiorIdade(valor) {
    if (valor >= 18) {
        return valor
    }
}

function filterMenorIdade(valor) {
    if (valor < 18) {
        return valor
    }
}
console.log(maior_idade)
console.log(menor_idade)


// ############################


const idades2 = [20,10,12,40,18,15,24,36,17,60,7]

function maior() {
    idades2.map(el => {
        if(el >= 18) {
            console.log(el)
        }
    })
}

console.log('Maioridade')
maior()

function menor() {
    idades2.map(el => {
        if(el < 18) {
            console.log(el)
        }
    })
}

console.log('Menoridade')
menor()
