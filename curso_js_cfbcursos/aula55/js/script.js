// objetos literais

alert('Trabalhando com objetos literais')

const pessoa = {
    nome: 'Zezinho',
    idade: '30',
    signo: 'Peixe'
}

// alterando valor do objeto
pessoa.nome = 'Bruno'
// outra maneira
pessoa['idade'] = 26

// ==========================================

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.signo)

const box = document.querySelector('#box')
const btn = document.querySelector('#btnAdd')

btn.addEventListener('click', ()=> {
    const inp = [
        document.getElementById('i-nome'), 
        document.getElementById('i-idade')
    ]
    const pessoa2 = {
        nome: inp[0].value,
        idade: inp[1].value,
        
        getNome: function() {
            return this.nome
        },
        getIdade: function() {
            return this.idade
        },
    }
    if (pessoa2.nome == '' || pessoa2.idade == '') {
        alert('Preencha os campos!')
    }else {
        box.innerHTML = `<p>Nome = ${pessoa2.nome} <br> Idade = ${Number(pessoa2.idade)}</p>`
        console.log(pessoa2.getNome())
        console.log(pessoa2.getIdade())
    }
    inp[0].value = ''
    inp[1].value = ''
})
