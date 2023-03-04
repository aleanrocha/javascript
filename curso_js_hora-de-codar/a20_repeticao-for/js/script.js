// EStruturas de repetição

// for

for (let i = 0 ; i < 10 ; i ++) {
  console.log("Posição " + i)
}

console.log("------------")

let arr = [90, 87, 45, 34, 23, 70, 65]

for (let index = 0; index < arr.length; index++) {
  let element = arr[index]
  console.log(element)
}

console.log("------------")

for (let n = 2 ; n < 100 ; n*=2) {
  console.log(n)
}
