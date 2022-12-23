/*

    Removendo elementos com javascript

*/

const box1 = document.querySelector('#caixa1')

const arrCourses = ['CURSO DE HTML', 'CURSO DE CSS', 'CURSO DE JAVASCRIPT', 'CURSO DE REACT', 'CURSO DE NODEJS', 'CURSO DE PHP']

arrCourses.map( (el,i) => {
    let newElement = document.createElement('div')
    newElement.innerText = el
    newElement.setAttribute('id', 'c' + i)
    newElement.setAttribute('class', 'curso cs1')
    
    /*
    newElement.addEventListener('click', (evt) => {
        box1.removeChild(evt.target)
        
       // let element = evt.target
       // element.remove()
        
    })
    */
    
    let btnRemove = document.createElement('div')
    btnRemove.setAttribute('id', 'btn')
    let p = document.createElement('p')
    let textP = document.createTextNode('remover')
  
    p.appendChild(textP)
    btnRemove.appendChild(p)
    newElement.appendChild(btnRemove)
    
    btnRemove.addEventListener('click', (evt) => {
        // newElement.remove()
        box1.removeChild(evt.target.parentNode.parentNode)
    })
    
    
    box1.appendChild(newElement)
})
