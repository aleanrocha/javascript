// Trabalhando com DESTRUCTURE

const arr = ['João', 'Zezinho', 'Guilherme']

// Armazena em um variável específica cada índice do array
const [a,b,c] = arr

alert(a)
alert(b)
alert(c)

console.log(a)
console.log(b)
console.log(c)

const ani = ['galinha', 'cachorro', 'gato', 'elefante', 'zebra']

// armazena no rest os restantes dos animais que vim pela frente
const [a1,a2,...rest] = ani

console.log(rest)