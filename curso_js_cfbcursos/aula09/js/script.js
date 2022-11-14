/*
======================
Ternary Operators = ?
======================
*/


let num = 34

/*
let res = num%2

if (res==0) {
    console.log(`O número ${num} é PAR`)
}else {
    console.log(`O número ${num} é ÍMPAR`)
}
*/


// Utilizando o operador ternário

// 0 false
// 1 true

// Por padrão o primeiro valor é false e o segundo e true
res = (!(num%2) ? 'PAR' : 'ÍMPAR')
console.log(res)

let nota1=7,nota2=8
let soma = (nota1 + nota2) / 2

resultado = ((soma >= 7) ? 'Aprovado':'Reprovado')
console.log(resultado)

