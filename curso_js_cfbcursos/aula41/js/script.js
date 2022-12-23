/* método find - faz uma busca nos elementos 
   de um array se encontrar o elemento retorna
   true senão retorna undefined
*/

const p_array = document.getElementById('array')
const pesquisar = document.getElementById('txt_pesquisar')
const btn_pesquisar = document.getElementById('btnPesquisar')
const res = document.getElementById('res')

const elementos = [2, 5, 8, 9, 32, 12, 15, 100, 4]
p_array.innerHTML = '['+elementos+']'
btn_pesquisar.addEventListener('click', (evt) => {
    
    let fd = elementos.find((el,ind) => {
        if (el == pesquisar.value) {
            let res_pesquisa = res.innerHTML = `O número <strong>${el}</strong> foi encontrado!`
            return res_pesquisa
       
        }
    })
    if (fd == undefined) {
        res.innerHTML = `Número <strong>${pesquisar.value}</strong> não encontrado!`
    }
})
