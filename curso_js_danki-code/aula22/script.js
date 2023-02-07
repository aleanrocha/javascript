// Trabalhando com Animações em JAVASCRIPT

let btn = document.querySelectorAll('.conteudo button')
let p = document.querySelectorAll('.conteudo p') 

btn[0].addEventListener('click', function() {
    let p = document.querySelectorAll('.conteudo p')
    if (p[0].classList.contains('hide-content')) {
       p[0].classList.remove('hide-content')
       btn[0].innerHTML = 'Ver mais'
    } else {
        p[0].classList.add('hide-content')
        btn[0].innerHTML = 'Ver menos'
    }
})


btn[1].addEventListener('click', function() {
    let p = document.querySelectorAll('.conteudo p')
    if (p[1].classList.contains('hide-content')) {
       p[1].classList.remove('hide-content')
       btn[1].innerHTML = 'Ver mais'
    } else {
        p[1].classList.add('hide-content')
        btn[1].innerHTML = 'Ver menos'
    }
})


btn[2].addEventListener('click', function() {
    let p = document.querySelectorAll('.conteudo p')
    if (p[2].classList.contains('hide-content')) {
       p[2].classList.remove('hide-content')
       btn[2].innerHTML = 'Ver mais'
    } else {
        p[2].classList.add('hide-content')
        btn[2].innerHTML = 'Ver menos'
    }
})


btn[3].addEventListener('click', function() {
    let p = document.querySelectorAll('.conteudo p')
    if (p[3].classList.contains('hide-content')) {
       p[3].classList.remove('hide-content')
       btn[3].innerHTML = 'Ver mais'
    } else {
        p[3].classList.add('hide-content')
        btn[3].innerHTML = 'Ver menos'
    }
})

// outro jeito otimizado 

/*
let btn = document.querySelectorAll('.conteudo button')
let p = document.querySelectorAll('.conteudo p') 

p.forEach((item,indice)=> {
    document.querySelectorAll('.conteudo button')[indice]
    .addEventListener('click', ()=> {
        if (p[indice].classList.contains('hide-content')) {
            p[indice].classList.remove('hide-content')
            btn[indice].innerHTML = 'Ver mais'
        } else {
            p[indice].classList.add('hide-content')
            btn[indice].innerHTML = 'Ver menos'
        }
    })
})
*/
