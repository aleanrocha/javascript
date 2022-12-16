/*

Break - ele gera um interrupção na execução do LOOP

Continue - quando executado dentro de um LOOP o 
continue para a iteração e pula pra próxima

*/

let n = 0
let max = 100
let pares = 0

// break 

/*
while (n<max) {
    console.log('n: ' + n)
    if (n>10) {
        break
    }
    n++
}
console.log('Fim do programa!')
*/

// continue

for (let i=n;i<max;i++) {
    console.log('n: ' + i)
    //como o número é ímpar ele pula pró próximos
    // utilizando o continue
    if (i%2==1) {
        continue
    }
    pares++
}
console.log(pares + ' - números pares!')
console.log('Fim do Progama')