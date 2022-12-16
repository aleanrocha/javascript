// funções com parâmetros

/*
function nome(p1) {
    console.log(p1)
}
soma('JS')
soma('funções com parâmetros')
soma(2022)
*/


/*
function soma(n1=0,n2=0) {
    return n1+n2
}
*/

/*
function soma(n1=0,n2=0) {
    let res
    res = n1+n2
    return res
}
*/

let valorPadrao = 0

function soma(n1=valorPadrao,n2=valorPadrao) {
    return n1+n2
}

// res recebe o valor de retorno da função 
let res = soma(5,7)
//console.log(res)





let valor = 0

console.log(valor)

function add(v) {
    return valor+v
}

valor = add(22)
console.log(valor)

valor = add(5)
console.log(valor)

valor = add(3)
console.log(valor)
