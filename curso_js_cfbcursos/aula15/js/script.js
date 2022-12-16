let arr = [10,20,30,40,50]

// modo tradicional 

/*
for (let i = 0;i < arr.length; i++) {
    console.log(arr[i])
}
*/


// utilizando for in
// o i recebe os elementos do arr

/*
for (i in arr) {
    console.log(arr[i])
}
*/


// ultilizando for of
// o for of itera diretamente os elementos
// de dentro da coleção

/*
for (i of arr) {
    console.log(i)
}
*/

const objs = document.getElementsByTagName('p')

for (x of objs) {
    console.log(x.style.color = 'blue')
}

for (x in objs) {
    console.log(objs[x].innerHTML = 'Curso de JavaScript')
}

