// Utilizando let e const


// LET

let x = 1 // var x = 1

console.log(x)
console.log("-------")

x = 10

console.log(x)
console.log("-------")


if (true) {
  let x = 27
  console.log(x)
  console.log("-------")

}
console.log(x)
console.log("-------")

// CONST

// O valor da constante não pode ter seu valor alterado

const y = 60

console.log("const " + y)
console.log("-------")


//y = 70
//onsole.log(y)

for (let index = 0; index < 7; index++) {
  const element = index
  console.log(element) 
}
