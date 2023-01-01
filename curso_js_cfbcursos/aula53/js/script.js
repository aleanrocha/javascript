class Pessoa {
    constructor (Pnome,Pidade) {
        this.nome = Pnome
        this.idade = Pidade
    }
    getNome(){
        return this.nome
    }
    getIdade(){
        return this.idade
    }
    setNome(nome){
        return this.nome = nome
    }
    setIdade(idade){
        return this.idade = idade
    }
    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
    }
}
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
    }
    // limpa os campos de input
    i_nome.value = ''
    i_idade.value = ''
    i_nome.focus()
})