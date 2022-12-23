const box2 = document.getElementById('caixa2')
const btnCourseAdd1 = document.getElementById('btnAdd1')
const btnCourseAdd2 = document.getElementById('btnAdd2')
const input = document.getElementById('novoCurso')
const btnCourseSelected = document.getElementById('btnSelect')
const btnCourseRemove = document.getElementById('btnRemove')
const arrCourses = ['CURSO DE HTML', 'CURSO DE CSS', 'CURSO DE JAVASCRIPT', 'CURSO DE REACT', 'CURSO DE NODEJS', 'CURSO DE PHP']


// função que cria os novos elementos

let indice = 0

const createNewElement = (course) => {
    let newElement = document.createElement('div')
        
    newElement.innerHTML = course
  
    newElement.setAttribute('id', 'c' + indice)
    newElement.setAttribute('class', 'curso cs1')
    
    let newElementInput = document.createElement('input')
    newElementInput.setAttribute('type', 'radio')
    newElementInput.setAttribute('name', 'rb_curso')
    
    newElement.appendChild(newElementInput)
    
    return newElement
}

// mapeia a lista de array

arrCourses.map((el) => {   
    let newElement = createNewElement(el)     
    box2.appendChild(newElement)
    indice++
})

// função que pega o input radio selecionado

const radioSelected = () => {
    let inputsRadio = document.querySelectorAll('input[type=radio]')
    inputsRadio = [...inputsRadio]
    
    let radioSelected = inputsRadio.filter((evt) => {
        return evt.checked
    })
    
    return radioSelected[0]
}

// pega o conteúdodo do input e exibe na tela

btnCourseSelected.addEventListener('click', (evt) => {
    let rs = radioSelected()
    try {
       let courseSelected = rs.parentNode.firstChild.textContent
       alert('Curso Selecionado - ' + courseSelected) 
    } catch (err) {
        alert('Por favor, selecione um curso!')
    }
    
})

// remove todo o conteúdo selecionado

btnCourseRemove.addEventListener('click', () => {
    let rs = radioSelected()
    if (rs != undefined) {
       let courseSelected = rs.parentNode.remove() 
    } else {
        alert('Por favor, selecione um curso!')
    }
    
})

// botão para adicionar novos elementos ANTES

btnCourseAdd1.addEventListener('click', () => {
    let rs = radioSelected()
    try {
        if (input.value != '') {
            let courseSelected = rs.parentNode
           let newCourse = createNewElement(input.value.toUpperCase())
           box2.insertBefore(newCourse,courseSelected)
        } else {
           alert('Digite o nome do curso') 
        }
    } catch (err) {
        alert('Por favor, selecione um curso!')
    }
})

// botão para adicionar novos elementos DEPOIS

btnCourseAdd2.addEventListener('click', () => {
    let rs = radioSelected()
    try {
        if (input.value != '') {
           let courseSelected = rs.parentNode.nextSibling
           let newCourse = createNewElement(input.value.toUpperCase())
           box2.insertBefore(newCourse,courseSelected) 
        } else{
            alert('Digite o nome do curso!')
        }
    } catch (err) {
        alert('Por favor, selecione um curso!')
    }
})


// ##########################################


// TOGGLE invés do input RADIO

/*
const ts = () => {
    let courseSelected = document.querySelectorAll('.selected')
    courseSelected = [...courseSelected]
    courseSelected.map(el => {
        el.classList.remove('selected')
    })
}
let indice = 0

const createNewElement = (course) => {
    let newElement = document.createElement('div')
        
    newElement.innerHTML = course
  
    newElement.setAttribute('id', 'c' + indice)
    newElement.setAttribute('class', 'curso cs1')
    newElement.addEventListener('click', (evt) => {
        // remove a classe selected 
        ts()  
         evt.target.classList.toggle('selected') 
    })
    return newElement
}


arrCourses.map((el) => {   
    let newElement = createNewElement(el)     
    box2.appendChild(newElement)
    indice++
})


const courseSelected = () => { 
        let courseSelected = document.querySelectorAll('.selected')
    return courseSelected[0]
}


btnCourseSelected.addEventListener('click', (evt) => {
    try {
       alert('Curso Selecionado - ' + courseSelected().innerHTML) 
    } catch (err) {
        alert('Por favor, selecione um curso!')
    }    
})


btnCourseRemove.addEventListener('click', () => {
    let rs = courseSelected()
    if (rs != undefined) {
         rs.remove()
    } else {
        alert('Por favor, selecione um curso!')
    }
    
})


btnCourseAdd1.addEventListener('click', () => {
    try {
        if (input.value != '') {
           let newCourse = createNewElement(input.value.toUpperCase())
           box2.insertBefore(newCourse,courseSelected())
        } else {
           alert('Digite o nome do curso') 
        }
    } catch (err) {
        alert('Por favor, selecione um curso!')
    }
})


btnCourseAdd2.addEventListener('click', () => {
    try {
        if (input.value != '') {
           let newCourse = createNewElement(input.value.toUpperCase())
           box2.insertBefore(newCourse,courseSelected().nextSibling) 
        } else {
            alert('Digite o nome do curso!')
        }
    } catch (err) {
        alert('Por favor, selecione um curso!')
    }
})
*/
