/*
Funções aninhadas são funções dentro de funções 
*/

/*
const soma = (...valores)=>{
    const somar = val=>{
        let res = 0
        for (v of val)
            res += v
        return res
    }
    // retorna o retorno da função somar
    return somar(valores)
}
console.log(soma(5,5,5))
*/

const somar = (val) => {
    let res = 0
    for (v of val) {
        res += v
    }
    return res
}

const soma = (...valores) => {
    return somar(valores)
}

const arrVal = [5,5,5]

console.log(soma(...arrVal))