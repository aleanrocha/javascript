// Trabalhando com AJAX - Requisições com fetch

/* 
    AJAX - Significa Acynchronous Javascript and XML
    basicamente ele faz requisições depois da página
    ter finalizado seu carregamento sem precisar atualizar.
*/

const container = document.querySelector("#movies")
const url = 'https://api.themoviedb.orG/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&language=en-US&page=1'

fetch(url, {
    method: "GET"
})
.then(response => response.json())
.then(data => {
    data.results.map(val => {
        console.log(val)
        container.innerHTML += `
        <div class="title">${val.original_title}
        <p style="display:none;" class="overview">${val.overview}</p><hr> 
        </div>`
    })
    const title = document.querySelectorAll(".title")
    for (let index = 0; index < title.length; index++) {
        title[index].addEventListener("click", (t) => {
            if (t.target.querySelector(".overview").style.display == "none") {
                t.target.querySelector(".overview").style.display = "block"
            } else {
                t.target.querySelector(".overview").style.display = "none"
            }
        })
        
    }
})