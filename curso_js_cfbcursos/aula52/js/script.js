// trabalhando com orientação a objetos

class Carro {
    // O método construtor ele é altomaticamente chamado
    // quando eu instancio um novo objeto dessa classe
    constructor (Pnome,Ptipo) {
        this.nome = Pnome
        if (Ptipo == 1) {
            this.tipo = "Esportivo"
            this.velMax = 380
        } else if (Ptipo == 2) {
            this.tipo = "Utilitário"
            this.velMax = 200
        } else if (Ptipo == 3) {
            this.tipo = "Passeio"
            this.velMax = 180
        } else {
            this.tipo = "Militar"
            this.velMax = 220
        }
    }
    
    // métodos que retornam todas as propiedades

    info() {
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`V-max: ${this.velMax}`)
        console.log('===================')
    }
    getNome() {
        return this.nome
    }
    getTipo() {
        return this.tipo
    }
    getVelMax() {
        return this.velMax
    }
    getInfo() {
        return [this.nome,this.tipo,this.velMax]
    }
    // o método SET pode alterar o valor de uma determinada propiedade
    setNome(nome) {
        this.nome = nome
    }
    setTipo(tipo) {
        this.tipo = tipo
    }
    setVelMax(velMax) {
        this.velMax = velMax
    } 
}

// instanciando um novo objeto
let C1 = new Carro('Veloz',1)
let C2 = new Carro('Super Luxo',2)
let C3 = new Carro('Blindado',4)
let C4 = new Carro('Carrega Tudo',3)

C1.info()
C2.info()
C3.info()
C4.info()

/*
console.log(C1.getNome())
console.log(C1.getTipo())
console.log(C1.getVelMax())
*/

/*
console.log(C1.getInfo())
console.log(C2.getInfo())
console.log(C3.getInfo())
console.log(C4.getInfo())
*/

// SET 
/*
C1.setNome('Super Veloz')
C1.setVelMax(765)
C1.info()
*/


/*
console.log(C1.nome)
console.log(C1.tipo)
console.log(C1.velMax)

console.log(C2.nome)
console.log(C2.tipo)
console.log(C2.velMax)

console.log(C3.nome)
console.log(C3.tipo)
console.log(C3.velMax)

console.log(C4.nome)
console.log(C4.tipo)
console.log(C4.velMax)
*/