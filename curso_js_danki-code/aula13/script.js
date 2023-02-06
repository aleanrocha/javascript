// Tranalhando com OBJETOS em JavaScript

function Pessoa() {
    // Basicamente o THIS é uma variável que estavos
    // ligando ao objeto Pessoa
    this.nome = 'JavaScipt'
}

// cria um novo objeto Pessoa
// instanciando um novo objeto

let pessoa1 = new Pessoa()
let pessoa2 = new Pessoa()

pessoa2.nome = 'EcmaScript'

alert(pessoa1.nome)
console.log(pessoa1)
console.log(pessoa1.nome)

alert(pessoa2.nome)
console.log(pessoa2)
console.log(pessoa2.nome)
