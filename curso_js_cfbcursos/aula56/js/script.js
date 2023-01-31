// Herança

class Carros {
    constructor(nome,portas) {// classe PAI / BASE
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
    }
    ligar = function() {
        this.ligado = true
    }
    desligar = function() {
        this.ligado = false
    }
    setCor = function(cor) {
        this.cor = cor
    }
    setVel = function(vel) {
        this.vel = vel
    }
}

class Militar extends Carros { // classe FILHO
    constructor(nome,portas,blindagem,municao) {
        // super invoca algo da classe pai
        super(nome,portas)

        this.blindagem = blindagem
        this.municao = municao
        this.setCor = ('Verde')
    }
    atirar = function() {
        if (this.municao>0) {
            this.municao--
        }
    }
}

let c1 = new Carros('Fiat',4)
//c1.ligar()
c1.setCor('Prata')

let c2 = new Militar('Brabão',6,100,75)
c2.ligar()
c2.setVel(180)

c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()

console.log(`Carro: ${c1.nome}`)
console.log(`Portas: ${c1.portas}`)
console.log(`Ligado: ${(c1.ligado? "sim" : "Não")}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`Cor: ${c1.cor}`)
console.log('-----------------------------')

console.log(`Carro: ${c2.nome}`)
console.log(`Portas: ${c2.portas}`)
console.log(`Ligado: ${(c2.ligado? "sim" : "Não")}`)
console.log(`Munição: ${c2.municao}`)
console.log(`Blindagem: ${c2.blindagem}`)
console.log(`Velocidade: ${c2.vel}km/h`)
console.log(`Cor: ${c2.setCor}`)