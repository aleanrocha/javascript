/*

  PROMISES são como promessas da vida real, ela está 
  esperando por algum retorno ou seja uma resposta
  para criar uma promessa instanciamos a classe PROMISE
  que leva dois argumentos RESOLVE (solução) e o
  REJECT (ERRO) para encadear mais processos utilizamos
  o método THEN

  "ALGUNS RECURSOS DE JS (fetch api) E BIBLIOTECAS RETORNAM PROMISES."

*/

// Criação de Promessa


const myPromise = new Promise((resolve, reject) => {
  const nome = "Zezinho"
  if (nome === "Zezinho") {
    resolve("O nome é Zezinho")
  } else {
    reject("O nome não é Zezinho")
  }
})

// executando a promise

myPromise.then((data) => {
  console.log(data)
})



// Encadeamento de then`s

const myPromise2 = new Promise((resolve, reject) => {
  const nome = "Zezinho"
  if (nome === "Zezinho") {
    resolve("O nome é Zezinho")
  } else {
    reject("O nome não é Zezinho")
  }
})

// executando a promise

myPromise2.then((data) => {
  return data.toUpperCase()
}).then(stringModificada => {
  console.log(stringModificada)
})


// retorno do catch

const myPromise3 = new Promise((resolve, reject) => {
  const nome = "Pedro"
  if (nome === "JavaScript") {
    resolve("O nome retornou JavaScript")
  } else {
    reject("O nome não é JavaScript.")
  }
})

myPromise3.then(response => {
  console.log(response)
}).catch(err => {
  console.log(`Aconteceu um erro: ${err}`)
})


// resolvendo várias promessas com método all
// Todas as promessa tem que ser resolvidas pra ele ser executado

const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("P1 OK")
  }, 3000)
})

const p2 = new Promise(resolve => {
  resolve("P2 OK")
})

const p3 = new Promise(resolve => {
  resolve("P3 OK")
})

const resAll = Promise.all([p1,p2,p3]).then((response) => {
  console.log(response)
})

console.log("Depois da Promise")

// resolvendo várias promessas com método (race) => corrida
// Retorna a primeira promessa que for resolvida


const p4 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("P4 OK")
  }, 5000)
})

const p5 = new Promise(resolve => {
  resolve("P5 OK")
})

const p6 = new Promise(resolve => {
  resolve("P6 OK")
})

const resRace = Promise.race([p4,p5,p6]).then((response) => {
  console.log(response)
})


// Prática
// api github

const username = "aleanrocha"

fetch(`https://api.github.com/users/${username}`,{
  method: `GET`,
  headers: {
    Accept: `application/vnd.github.v3+json`
  }
})
.then(response => response.json())
.then(data => console.log(data.name))
.catch(err => console.log(`Houve um erro: ${err}`))