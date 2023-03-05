/*

  DOM - Document Object Model
  Uma interface de programação para HTML

  Por meio dele temos métodos para acessar
  a árvore de elementos

  O DOM fornece uma cópia do HTML

  Podemos manipular eventos pelo DOM para afetar o HTML

*/

// tag

let h1 = document.getElementsByTagName("h1")[0]
console.log(h1)

let lis = document.getElementsByTagName("li")
console.log(lis)

// id

let p = document.getElementById("pa")
console.log(p)

let ul = document.getElementById("lista")
console.log(ul)

// class

let items = document.getElementsByClassName("item")
console.log(items)