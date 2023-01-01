// array - basicamente é uma variável que podemos
// guardar múltiplos valores 

var nomes = ['Zezinho', 'Beto', 'Dorivaldo']
console.log(nomes[0])
console.log(nomes[1])
console.log(nomes[2])

// outra forma 

var nomes2 = new Array('Guilherme', 'joão', 'Bernardo')
console.log(nomes2[0])
console.log(nomes2[1])
console.log(nomes2[2])

// Alterando valores do array

nomes2[0] = 'JavaScript'
nomes2[1] = 'EcmaScript'
nomes2[3] = 'Progamação'

// adicionando novo valor no final

nomes2.push('Linguagem')

console.log(nomes2)
