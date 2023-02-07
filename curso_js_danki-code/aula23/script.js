// Exercicío criando slide com vanilla JS


// vai armazenar o úlimko índice
let = lastIndex = 0

// pegar as imagens
let images = document.querySelectorAll('.container img')

images.forEach((item,indice)=> {
    document.querySelectorAll('.bullet')[indice]
    .addEventListener('click', ()=> {
        let lastImage = document.querySelectorAll('.container img')[lastIndex]
        let actualImage = document.querySelectorAll('.container img')[indice]

        //resetar os bullets e setar a nova com base na imagem
        document.querySelectorAll('.bullet')[lastIndex]
        .classList.toggle('active-bullet')
        document.querySelectorAll('.bullet')[indice]
        .classList.toggle('active-bullet')

        lastImage.style.opacity = 0
        actualImage.style.opacity = 1

        lastIndex = indice

    })
})


