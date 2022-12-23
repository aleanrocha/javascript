/*
Basicamente eventos são os acontecimentos ou um conjunto de ações que são relizadas no site
*/

const cs2 = [...document.querySelectorAll('.cs2')]


/*
const msg = () => {
    alert('clicou')
}

cs2.map((el) => {
    el.addEventListener('click', msg)
})
*/

cs2.map((el) => {
    el.addEventListener('click', ()=>{
        alert('clicou')
    })
})

//captura quem fez o evento
cs2.map((el) => {
    el.addEventListener('click', (event)=>{
        const evt = event.target
        evt.style.backgroundColor = 'yellow'
        console.log(evt.innerHTML)
        
    })
})
