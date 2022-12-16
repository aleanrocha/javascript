/*
Basicamente funções anônimas são funções que não tem o nome associado ao conteúdo 
elas são chamadas em tempo de execução 
*/

// exemplo de uma função anônima

/*
const f = function (n1,n2) {
    return n1 + n2
}
*/

/*
const f = function (...valores) {
    res = 0
    for (v of valores) {
        res += v
    }
    return res
}
*/

// função construtor anônima
// OBS - o Function tem q começar com letra maiúscula

const f = new Function ("n1","n2","return n1+n2")
console.log(f(3,5))
