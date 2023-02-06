// Tranalhando com OBJETOS em JavaScript

function Pessoa() {
    this.nome = 'João',
    this.idade = 20
    this.printName = function () {
        alert('Seu nome é ' + this.nome)
    }
    this.returnAnimal = function (animal) {
        return animal
    }
}

function Animal(nome,peso) {
    this.nome = nome
    this.peso = peso
}

// instanciando um novo objeto

let p1 = new Pessoa()

p1.printName()

let p2 = new Pessoa()

p2.nome = 'Gustavo'

p2.printName()

// instanciando um novo objeto

let animal1 = new Animal('Cachorro',12)

let animal2 = new Animal('Galinha',5)

console.log('Nome = ' + animal1.nome)
console.log('Peso = ' + animal1.peso)

console.log('Nome = ' + animal2.nome)
console.log('Peso = ' + animal2.peso)

// Passando um objeto como parâmetro da função
alert(p1.returnAnimal(animal1.nome))