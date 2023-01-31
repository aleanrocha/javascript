/*
Membros STATIC -  Métodos estáticos não são chamados na instâncias da classe. 
Em vez disso, eles são chamados na própria classe. Geralmente, são funções utilitárias, 
como funções para criar ou clonar objetos.

Chamadas a métodos estáticos são feitas diretamente na classe e não podem ser feitas em uma instância da classe. 
Métodos estáticos são comumente utilizados como funções utilitárias.
*/

class npc {
     static alerta = false
     constructor(energia) {
        this.energia = energia
    }
    info = function() {
        console.log(`Energia: ${this.energia}`)
        console.log(`Alerta: ${(npc.alerta? "Sim" : "Não")}`)
        console.log(`Author: ${npc.author}`)
        console.log('------------')

    }
    static author = function() {
        npc.author = 'Zezinho'
    }
}

let npc1 = new npc(100)
let npc2 = new npc(80)
let npc3 = new npc(30)

// npc1.alerta = true

npc.alerta = true
npc.author()

npc1.info()
npc2.info()
npc3.info()
