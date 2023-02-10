// Trabalhando com Promise

/* 
    Uma Promise é um proxy para um valor não necessariamente conhecido quando a promise é criada. Ele permite que você associe manipuladores ao valor de sucesso ou motivo de falha de uma ação assíncrona. Isso permite que métodos assíncronos retornem valores como métodos síncronos: em vez de retornar imediatamente o valor final, o método assíncrono retorna uma promise para fornecer o valor em algum momento no futuro.
*/

const testes = () => {
  return new Promise((resolve, reject) => {
    const erro = false

    setTimeout(() => {
        if (erro) {
            reject('ERRO')
        } else {
            resolve('A Promise foi resolvida com sucesso!')
        }
    }, 2000)
  })
}

/*
testes().then((res) => {
    alert(res)
}).catch((err) => {
    alert(err)
})
*/

async function testes2() {
    // aguardando a resposta da Promise
    // o resto do codigo so vai ser executado depois da resposta
    await testes().then((res) => {
        alert(res)
    }).catch((err) => {
        alert(err)
    })
    alert('Tudo certo!')
}
testes2()