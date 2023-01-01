// Trabalhando com a coleção SET

const box = document.getElementById('caixa')


// a coleção SET não permite entradas duplicadas

let cores = new Set(['verde', 'vermelho', 'azul'])
cores.add('rosa')
cores.add('verde')
cores.add('vermelho')

console.log(cores)

//cores.clear()
//cores.delete('verde')

console.log(cores.has('vermelho'))


cores.forEach( (el) => {
     box.innerHTML +=  el + '</br>' 
})
