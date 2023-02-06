// Trabalhando com Animações em JAVASCRIPT

let box = document.querySelectorAll('.box')

box[0].innerHTML = 'Clique em Mim'
box[0].style.cursor = 'pointer'
box[0].style.textAlign = 'center'
box[0].style.paddingTop = '90px'

box[0].addEventListener('click', function()  {
    box[0].classList.toggle('clicado')
    if (box[0].innerHTML == 'Clique em Mim') {
        box[0].innerHTML = 'Animação com JavaScript'
    } else {
        box[0].innerHTML = 'Clique em Mim'
    }
})
