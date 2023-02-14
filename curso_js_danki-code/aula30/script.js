// Trabalhando com AJAX

/* 
    AJAX - Significa Acynchronous Javascript and XML
    basicamente ele faz requisições depois da página
    ter finalizado seu carregamento sem precisar atualizar.
*/

// ajax tradicional

let request = new XMLHttpRequest()

request.open('GET','https://jsonplaceholder.typicode.com/todos/1',true)

request.onload = function() {
    if (this.status >= 200 && this.status < 400) {
    // a requisão foi feita com  sucesso
        let data = JSON.parse(this.response)
        console.log(data)

    } else {
       // erro
       console.log('[ERRO] - Não foi possível conectar ao servidor!')
    }
}

request.onerror = function() {

}

request.send()