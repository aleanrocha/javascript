// pegando elementos através do querySelectorAll - DOM

let elements = document.querySelectorAll('.box .item-box')

elements[0].innerHTML = 'JavaScript é uma Linguagem de Programação'

elements[1].innerHTML = 'Que foi padronizada pela EcmaScript'

elements[2].innerHTML = 'A linguagem responsável pela interatividade de um site'

for (let i = 0 ; i < elements.length ; i++) {
    elements[i].style.backgroundColor = 'darkblue'
    elements[i].style.color = 'white'
    elements[i].style.display = 'inline-block'
    elements[i].style.padding = '15px'
    elements[i].style.margin = '10px'
    elements[i].style.borderRadius = '24px'
}