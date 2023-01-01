// substituindo CLASS por FUNCTION

function Pessoa(Pnome, Pidade) {
    this.nome = Pnome,
    this.idade = Pidade,

    this.getNome = function() {
        return this.nome
    },
    this.getIdade = function() {
        return this.idade
    },
    this.setNome = function(nome) {
        return this.nome = nome
    }
    ,
    this.setIdade = function(idade) {
        return this.idade = idade
    },
    this.info = function() {
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
    }
}

alert('Trabalhando com objetos parte4')
const box = document.getElementById('box')
const btn = document.getElementById('btnAdd')

btn.addEventListener('click', ()=> {
    // pego os campo de input
    let i_nome = document.getElementById('i-nome')
    let i_idade = document.getElementById('i-idade')
    // instanciando um novo objeto
    let p1 = new Pessoa(i_nome.value,i_idade.value)
    if (i_nome.value == '' || i_idade.value == '') {
        alert('Preencha os campos!')
    }else {
        // box.innerHTML += `<p>Nome = ${p1.nome} <br> Idade = ${Number(p1.idade)}</p>`
        box.innerHTML = `<p>Nome = ${p1.nome} <br> Idade = ${Number(p1.idade)}</p>`
        console.log(p1.getNome())
        console.log(p1.getIdade())
    }
    // limpa os campos de input
    i_nome.value = ''
    i_idade.value = ''
    i_nome.focus()
})
