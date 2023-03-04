/*
  Com break podemos encerrar uma instrução
  Com o continue podemos pular uma instrução
  UTilizados na maioria das vezes em loops
*/

for (let index = 10; index > 0 ; index--) {
 console.log(index)
 if (index === 4) {
  console.log("Deu break")
  break
 }
}

console.log("-----------------")

let n = 10

while (n < 100) {
  n += 10

  if (n === 60 || n === 100) {
    console.log("CONTINUE")
    continue
  }

  console.log(n)

}
