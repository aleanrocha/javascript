/*

    Criando novos elementos através do javascript 

*/

const box1 = document.querySelector('#caixa1')

const arrCourses = ['CURSO DE HTML', 'CURSO DE CSS', 'CURSO DE JAVASCRIPT', 'CURSO DE REACT', 'CURSO DE NODEJS', 'CURSO DE PHP']

arrCourses.map( (el,i) => {
    // cria um novo elemento
    const newElement = document.createElement('div')
    // adiciona o array de elementos ao meu novo elemento
    newElement.innerText = el
    // adiciona um id a todos os novos elementos
    newElement.setAttribute('id', 'c' + i)
    // adiciona as classes a todos os novos elementos
    newElement.setAttribute('class', 'curso cs1')
    // anexa os novos elementos a caixa principal
    box1.appendChild(newElement)   
})


const newElement = document.createElement('div')

newElement.innerHTML = 'CURSO DE PYTHON'

newElement.setAttribute('id', 'c6')

newElement.setAttribute('class', 'curso cs1')


box1.appendChild(newElement)
