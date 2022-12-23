/*
getElementById - pega um elemento específico
através do ID
*/

const dc1 = document.getElementById('c1')
//console.log(dc1)
//console.log(dc1.id)
//console.log(dc1.innerHTML)
const dc2 = document.getElementById('c2')
const dc3 = document.getElementById('c3')
const dc4 = document.getElementById('c4')
const dc5 = document.getElementById('c5')

const arrEl = [dc1,dc2,dc3,dc4,dc5]

arrEl.map((el) => {
    console.log(el)
    el.style.fontWeight = 'bolder'
})