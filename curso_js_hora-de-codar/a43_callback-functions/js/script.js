/*

  A função de callback é um recurso muito interessante
  e também amplamente utilizado em javascript
  ela permite executar uma função depois de uma 
  determinada ação. É um conceito fundamental 
  para entender a parte assíncrona do javascript.

  Uma função callback é uma função passada a outra função como argumento, 
  que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.

*/


function exibir(n) {
  console.log(n)
}

function soma(a, b, callback) {
  let s = (a + " + " + b + " = " + (a + b))
  callback(s)
}
soma(7, 7, exibir)

function multi(x, y, cb) {
  let m = (x + " x " + y + " = " + (x * y))
  cb(m)
}
multi(9, 9, exibir)

