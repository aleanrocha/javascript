// funções de retorno

function canal() {
    let n1 = 10
    let n2 = 4
    let res =  n1 * n2
    if (res%2==0) {
        return `O número ${res} é PAR.`
    } else {
        return `O número ${res} é ÍMPAR.`
    }
    // só podemos ter um return dentro de uma 
    // função tudo q vai depois dele nao é executado
    
}
// a função canal retorna o valor dos comandos 

// console.log(canal())

// podemos tambem armazenar o valor da função em uma variável

// a variável rssCanal recebe o valor de retorno da função 
let resCanal = canal()

console.log(resCanal)
