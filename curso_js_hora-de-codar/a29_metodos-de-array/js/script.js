// Funções de array parte 1

// lenhth => Tamanho do array

let a = [1,2,3,4,5]

console.log(a)
console.log("Tamanho do array é igual a " + a.length)

console.log("--------------------------------")

// push => Adiciona um novo elemento no final do array

a.push(6)
console.log(a)

a.push("Javascript")
a.push("ecmascript")
console.log(a)

console.log("--------------------------------")


// pop => Remove um elemento do fim do array

a.pop()
console.log(a)

console.log("--------------------------------")

// unshift => Adiciona um elemento no começo do array

a.unshift(0)
a.unshift("teste")

console.log(a)

console.log("--------------------------------")


// shift => Remove um elemento no começo de um array

a.shift()

console.log(a)

// Acessar o último elemento de um array

console.log(a[a.length - 1])

// isArray => Verifica se é um array

console.log(Array.isArray(a))
