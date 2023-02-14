// Trabalhando com AJAX - Requisições com fetch

/* 
    AJAX - Significa Acynchronous Javascript and XML
    basicamente ele faz requisições depois da página
    ter finalizado seu carregamento sem precisar atualizar.
*/


/*
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((response) => (response.json()))
.then((json) => {console.log(json)})
*/


fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',

    body: JSON.stringify({
        title: 'Ajax - DankiCode',
        body: 'Trabalhando com requisição fetch',
        userId: 1
    }), 
    headers:{
        'Content-type': 'application/json; charset=UTF-8',
    }
})
.then(response => response.json())
.then(res => console.log(res))

