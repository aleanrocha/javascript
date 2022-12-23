alert('Apredendo sobre iteradores em JS.')

const valores  = [1,2,5]
const texto = 'javascript'

const itValores = valores[Symbol.iterator]()
const itTexto = texto[Symbol.iterator]()

console.log(valores)
console.log(texto)

// iteração

console.log(itValores.next())
console.log(itValores.next())
console.log(itValores.next())

console.log(itValores.next())
console.log(itValores.next())

console.log(itTexto.next())
console.log(itTexto.next())
console.log(itTexto.next())
console.log(itTexto.next())
console.log(itTexto.next())
console.log(itTexto.next())
console.log(itTexto.next())
console.log(itTexto.next())
console.log(itTexto.next())
console.log(itTexto.next())
console.log(itTexto.next())
console.log(itTexto.next())
