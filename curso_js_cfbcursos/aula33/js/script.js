// obter os elementos que eu quero trabalhar 
const box1 = document.querySelector('#caixa1')
const box2 = document.querySelector('#caixa2')
const btn = document.querySelector('#btn')
const all_courses = [...document.querySelectorAll('.curso')]

// adicionar evento de click em todos os cursos
all_courses.map((el) => {
    el.addEventListener('click', (evt) => {
        const courses = evt.target
        courses.classList.toggle('selected')
    })
})

btn.addEventListener('click', () => {
    const selected_courses = [...document.querySelectorAll('.selected')]
    const courses_not_selected = [...document.querySelectorAll('.curso:not(.selected)')]
    selected_courses.map((el) => {
        // anexa os elementos a segunda caixa
        box2.appendChild(el)
    })
    courses_not_selected.map((el) => {
        box1.appendChild(el)
    })
})