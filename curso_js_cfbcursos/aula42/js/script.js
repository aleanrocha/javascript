/*
   método EVERY - Ele verifica se todos
   os elementos de um array equivalem
   a uma regra estabelecida por mim
   
   Ele faz uma comparação entre todos os
   elementos e vai me retornar um ok quando
   todos os elementos estiverem conforme a 
   minha regras.
*/

const p_array = document.getElementById('array')
const btn_verificar = document.getElementById('btnVerificar')
const res = document.getElementById('res')

const elementos = [22, 52, 8, 39, 32, 18, 23, 100, 40]
p_array.innerHTML = '['+elementos+']'

btn_verificar.addEventListener('click', (evt) => {
    let rs = elementos.every((e,i)=>{
        if (e<18) {
            res.innerHTML = 'Não conforme na posição ' + i
        }
        return e>=18
    })
    if (rs) {
        res.innerHTML = 'OK'
    }
})
