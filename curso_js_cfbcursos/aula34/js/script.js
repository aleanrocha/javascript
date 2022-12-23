/*
stopPropagation para a propagação de um determinado evento
*/

const box1 = document.querySelector('#caixa1')
const cs1 = document.querySelector('#c1')
const all_courses = [...document.querySelectorAll('.curso')]

box1.addEventListener('click', (evt) => {
    console.log(evt.target)
    alert('clicou')
})

all_courses.map((el)=>{
   el.addEventListener('click', (evt) => {
       evt.stopPropagation()
    })
})

/*
cs1.addEventListener('click', (evt) => {
    evt.stopPropagation()
})
*/
