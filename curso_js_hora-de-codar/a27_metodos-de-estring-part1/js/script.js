// Funções de String

// length
// Mostra o comprimento de um determinado elemento

let nome = "Zezinho"

console.log("O nome " + nome + " tem " + nome.length + " letras.")


// indexOf
// Mostra o índice dos caracteres em um texto 

let txt = "O rato roeu a roupa do rei em roma"

console.log(txt)
console.log(txt.indexOf("roeu"))

// slice
// Mostra uma parte de uma determinada frase

console.log(txt.slice(7, 11))
console.log(txt.slice(22, 26))

// replace
// substitui uma frase em um texto

let newtxt = txt.replace("do rei", "da rainha")

console.log(newtxt)


