/*
    PROTOTYPE - Basicamente ele vai servir pra quando eu precisar adicionar uma 
    propiedade ou um método a um objeto.
*/

const nave = function(energia) {
    this.energia = energia
    this.disparos = 70
}

let nave1 = new nave(100)

nave.prototype.vidas = 5

nave.prototype.disparar = function() {
    if (this.disparos > 0) {
        this.disparos--
    }
}

nave1.disparar()
nave1.disparar()
nave1.disparar()
nave1.disparar()
nave1.disparar()


console.log(nave)
console.log(nave1)
console.log(nave1.energia)
console.log(nave1.disparos)