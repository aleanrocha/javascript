// trabalhando com orientação a objetos

class Pessoa {
    // O método construtor ele é altomaticamente chamado
    // quando eu instancio um novo objeto dessa classe
    constructor (Pnome) {
        this.nome = Pnome
       // this.nome = 'JavaScript'
    }
}
// instanciando um novo objeto
let p1 = new Pessoa('Zezinho')
let p2 = new Pessoa('Netinho')
let p3 = new Pessoa('Tancinha')

alert(p1.nome)
alert(p2.nome)
alert(p3.nome)
console.log(p1.nome)
console.log(p2.nome)
console.log(p3.nome)