// Laços de Repetição - for, while, do
// Laços de Repetição - Serve para podermos repetir
// a mesma função várias vezes por exemplo


// utilizando o while
let n1 = 0
while (n1 < 10) {
    // execute aqui
    console.log(n1)

    // incremento
    // n = n + 1
    n1++
}

console.log('========')

// utilizando for
for(let n2 = 10; n2 < 20; n2++) {
    console.log(n2)
}

console.log('========')

// ultilizando o (do while)
// o DO ele e executado antes de fazer a verificação

let n3 = 20

do {
    console.log(n3)
    n3++
} while (n3 <= 30);