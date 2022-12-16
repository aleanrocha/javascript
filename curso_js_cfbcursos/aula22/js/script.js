/*
Basicamente o REST e uma forma de passagen
de parâmetros em que eu não preciso  especificar
efetivamente a quantidade de parâmetros que eu 
quero enviar pra dentro da função.

parâmetros REST utiliza o SPRED ...

*/

/*
function soma(...valores) {
    // recebe a quantidade de valores do array
    let tam = valores.length
    // armazenar a soma dos valores
    let res = 0
    for (let i = 0; i < tam; i++) {
        res += valores[i]
    }
    // retorna a soma dos valores
    return res
}
*/



function soma(...valores) {
    let res = 0
    // a variável v vai percorrer e armazenar os valores
    for (let v of valores) {
        res += v
    }
    return res
}

console.log(soma(5,5,5,4))

