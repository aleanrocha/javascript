// Template Strings

const box = document.getElementById('caixa')

const curso = 'JavaScript'
const nome = 'CFBcursos'

// Forma tradicional
// box.innerHTML = 'Estou fazendo curso de ' + curso + ' no ' + nome

// ultilizando Template Strings
// box.innerHTML = `Estou fazendo  curso de ${curso} no ${nome}`

const cores = ['Ferrari', 'HB20', 'Gol', 'Camaro']

cores.map(el => {
    box.innerHTML += `<ul><li>${el}</li></ul>`
})

