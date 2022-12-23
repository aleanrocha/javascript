/*
   método REDUCE - Ele serve para iterar sobre 
   um array e utilizar o valor de cada item para 
   criar um objeto final com base em alguma regra.
   
*/

const p_array = document.getElementById('array')
const btn_reduzir = document.getElementById('btnReduzir')
const res = document.getElementById('res')

const elementos = [1, 2, 3, 4, 5]
p_array.innerHTML = '['+elementos+']'

let ant = []
let atu = []

btn_reduzir.addEventListener('click', (evt) => {
    res.innerHTML = elementos.reduce((anterior,atual,posicao)=>{
        atu.push(atual)
        ant.push(anterior)
        return anterior+atual
    })
    res.innerHTML += '<br> Anterior: ' + ant
    res.innerHTML += '<br> Atual: ' + atu
})
