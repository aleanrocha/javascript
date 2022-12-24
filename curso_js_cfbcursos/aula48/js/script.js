// Trabalhando com a coleção MAP 

const box = document.getElementById('caixa')

let mapa = new Map()

mapa.set('curso', 'javascript')
mapa.set(1,'linux')
mapa.set(10,100)
mapa.set('n1',1)

console.log(mapa)

//box.innerHTML = mapa.get('curso') 

mapa.delete(1)

if(mapa.has('n')) {
    box.innerHTML = 'A chace existe na coleção com o valor ' + mapa.get('n1')
} else {
    box.innerHTML = 'A chave não existe na coleção'
}
box.innerHTML += '<br> O tamanho da coleção é ' + mapa.size



