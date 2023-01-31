const radio = document.querySelectorAll('input[type=radio]')
const i_nome  = document.querySelector('#i-nome')
const i_portas = document.querySelector('#i-portas')
const i_blindagem = document.querySelector('#i-blindagem')
const i_municao = document.querySelector('#i-municao')
const btnAddCar = document.querySelector("#btnAdd")
const boxCar = document.querySelector("#box")


class Carros {
    constructor(nome,portas) {
        this.nome = nome
        this.portas = portas
    }
}

class Militar {
    constructor(nome,portas,blindagem,municao) {
        this.nome = nome
        this.portas = portas
        this.blindagem = blindagem
        this.municao = municao
    }
}

let a_carros = []

const removerCarro = (quem) => {
    a_carros = a_carros.filter((el) => {
        return el.nome != quem
    })
}

radio[0].addEventListener('click', ()=> {
    i_nome.value  = ''
    i_portas.value = 0
    i_blindagem.value = 0
    i_municao.value = 0
    i_blindagem.removeAttribute('disabled')
    i_municao.removeAttribute('disabled')
})

radio[1].addEventListener('click', ()=> {
    i_nome.value  = ''
    i_portas.value = 0
    i_blindagem.value = 0
    i_municao.value = 0
    i_blindagem.setAttribute('disabled','disabled')
    i_municao.setAttribute('disabled','disabled')
})

const gerenciarExibirCarros = () => {
    boxCar.innerHTML = ''
    a_carros.forEach((c) => {
        div = document.createElement('div')
        div.setAttribute('class','carro')
        div.setAttribute('data-nome',c.nome)
        btn = document.createElement('button')
        btn.innerHTML = 'Remover'
        btn.setAttribute('class','btnRemove')
        btn.addEventListener('click', (evt) => {
            let quemRemover = evt.target.parentNode.dataset.nome
            removerCarro(quemRemover)
            gerenciarExibirCarros()
        })
        div.innerHTML = `<p>Nome = ${c.nome} <br> Portas = ${c.portas} <br> Blindagem = ${c.blindagem} <br> Munição = ${c.municao}</p>`
        div.appendChild(btn)
        boxCar.appendChild(div)
    })
}

btnAddCar.addEventListener('click', ()=> {
    if (radio[1].checked) {
        let car1 = new Carros(i_nome.value,i_portas.value)
        a_carros.push(car1)  
    } else {
        let car2 = new Militar(i_nome.value,i_portas.value,i_blindagem.value,i_municao.value)
        a_carros.push(car2)
    }
    gerenciarExibirCarros()
})