/*
Basicamente funções são blocos de comandos que eu
posso executar em um determinado momento ou em um 
momento oportuno.
*/

// função tradicional

function nome() {
    console.log('Curso de JS.')
    console.log('Trabakhando com funções.')

}

function soma () {
    let n1 = 10
    let n2 = 7
    let soma = n1+n2
    console.log(`${n1} + ${n2} = ${soma}`)
}

function mudarTexto () {
    let div1 = document.getElementById('d1')
    let div2 = document.getElementById('d2')
    div1.innerHTML = 'Utilizando funções'
    div2.innerHTML = 'Ultilzando funções'
}

//chamando a função

//nome()

//nome()

//nome()


for (i = 0; i < 10; i++) {
   // nome()
   // soma()
}