// Funções de array parte 2

// splice => Adiciona ou remove um elemento no meio de um array

let arr = [1,2,3,4,5,6]

console.log(arr)

arr.splice(3, 0, 775)

console.log(arr)

arr.splice(4, 1)

console.log(arr)

console.log("----------------------------------------------")

// indexOf => Acha o índice de um elemento

console.log(arr.indexOf(775))

console.log("----------------------------------------------")

// join => Transforma um array em uma string

const cursos = ["HTML", "CSS", "JAVASCRIPT", "PHP", "PYTHON", "NODEJS", "REACT", "LINUX"]
console.log(cursos.join(", "))

console.log("----------------------------------------------")

// reverse => inverter a ordem do array

console.log(cursos.reverse())
