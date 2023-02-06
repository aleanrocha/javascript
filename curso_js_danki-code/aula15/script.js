// Tranalhando com OBJETOS em JavaScript

// CLASSES

class Animal {
    constructor(name,race) {
        this.nome = name
        this.raca = race
    }
    printName() {
        return this.nome
    }
}


let animal1 = new Animal('Cachorro','BullDog')

alert('Animal = ' + animal1.nome + ' raça = ' + animal1.raca)

console.log('Animal = ' +  animal1.printName())


// O extends faz com que a nova classe HERDE
// totos os atributos e métodos da classe selecionada

class Animal2 extends Animal {
    constructor(name,race) {
        // Basicamente o SUPER invoca o constructor e os parâmetros da classe pai
        super(name,race)
        this.idade = '3'
    }
    getIdade() {
        return this.idade
    }
}

var newAnimal = new Animal2('Cachorro','Maltes')

console.log('----------------------')

console.log('O animal é ' + newAnimal.nome + ' a raça é ' + newAnimal.raca + ' e tem ' + newAnimal.getIdade() + ' anos.')