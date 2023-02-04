// Trabalhando com ABSTRACT em JavaScript
class carroPadrao {
    constructor() {
        // Tornando uma classe abstrata
        if (this.constructor===carroPadrao) {
            throw new TypeError('Esta classe não pode ser instaciada')
        }
        if (this.ligar===undefined) {
            throw new TypeError('É obrigatório implementar o método ligar')
        }
        if (this.desligar===undefined) {
            throw new TypeError('É obrigatório implementar o método desligar')
        }
        this.rodas=4
        this.portas=4
        this.ligado=false
    }
}

class Carro extends carroPadrao {
    constructor(tipo,estagioTurbo) {
        super()
        this.turbo = new Turbo(estagioTurbo)
        if (tipo == 1) {
            this.velMax = 140
            this.nome = 'normal'
        } else if (tipo == 2) {
            this.velMax = 160
            this.nome = 'esportivo'
        } else if (tipo == 3) {
            this.velMax = 220
            this.nome = 'super esportivo'
        }
        this.velMax+=this.turbo.pot
    }
    ligar() {
        this.ligado = true
    }
    desligar() {
        this.desligado = false
    }
    info() {
        console.log(this.nome)
        console.log(this.velMax)
        console.log(this.turbo)

        console.log(this.rodas)
        console.log(this.portas)
        console.log(this.ligado)


        console.log('------------------------')
    }
}

class Turbo {
    constructor(e) {
        if (e == 0) {
            this.pot = 0
        } else if (e == 1) {
            this.pot = 50
        } else if (e == 2) {
            this.pot = 75
        } else if (e == 3) {
            this.pot = 100
        }
    }
}

class carroEspecial extends Carro {
    constructor(estagioTurbo) {
        super(4,estagioTurbo)
        this.tipoInfo = 1
        this.velMax = 380 + this.turbo.pot
        this.nome = 'Carro Especial'
    }
    info() {
        if (this.tipoInfo == 0) {
            super.info()
        } else {
            console.log(`Nome: ${this.nome}`)
            console.log(`VelMax: ${this.velMax}`)
            console.log(`Turbo ${this.turbo.pot}`)

            console.log(`Rodas: ${this.rodas}`)
            console.log(`Portas: ${this.portas}`)
            console.log(`Ligado: ${this.ligado}`)

            console.log('------------------------')
        }
    }
}
c1 = new Carro(1,0)
c2 = new Carro(1,1)
c3 = new carroEspecial(3)


//c4 = new carroPadrao()

c1.info()
c2.info()
c3.info()
