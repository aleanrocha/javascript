/*
   método SOME - Ele verifica se pelo menos
   um dos elementos de um array equivalem
   a uma regra estabelecida por mim
   
   Ele faz uma busca nos elementos de um array
   e me retorna um ok se pelo
   menos um dos valores estiverem conforme a 
   minha regra.
   
*/

const p_array = document.getElementById('array')
const btn_verificar = document.getElementById('btnVerificar')
const res = document.getElementById('res')

const elementos = [12, 18, 8, 9, 17, 15, 14,]
p_array.innerHTML = '['+elementos+']'

btn_verificar.addEventListener('click', (evt) => {
    let rs = elementos.some((e,i)=>{
        if (e<18) {
            res.innerHTML = 'Não conforme na posição ' + i
        }
        return e>=18
    })
    if (rs) {
        res.innerHTML = 'OK'
    }
})
