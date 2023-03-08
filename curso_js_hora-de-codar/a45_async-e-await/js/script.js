/*

  As FUNÇÕES ASSÍNCRONAS funcionam como PROMISSES, porém
  com uma sintaxe mais simples, precisamos declarar
  a função com a palavra ASYNC, e quando precisamos
  aguardar por algo a instrução precisa de um AWAIT.
  Podemos aplicar o recurso em FUNÇÕES ANÔNIMAS e
  métodos de classe.

  OBS: Tentar usar o AWAIT sem o ASYNC gera um ERRO.

*/

// sintaxe

/*
function primeiraFubcao() {
 return new Promise((resolve) => {
  setTimeout(() => {
    console.log("Que LEGAL! Você esperou por mim!")
    resolve()
  }, 3000);
 })
}

async function segundaFuncao() {
  console.log("INICIOU")

  await primeiraFubcao()
  
  console.log("TRRMINOU")
}

segundaFuncao()

*/

// Prática

function getUser(id) {
  return fetch(`https://reqres.in/api/users?id=${id}`)
  .then(data => data.json())
  .catch(err => console.log(err))
}

async function showUserName(id) {
 try {
  const user = await getUser(id)
  console.log(`O nome do usuário é ${user.data.first_name}`)
 } catch (error) {
  console.log(`erro: ${error}`)
 }
}

showUserName(4)