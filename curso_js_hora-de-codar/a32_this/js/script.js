// Utilizando this

/*
  Fora de escopos locais o this sempre se refere
  ao objeto global window. Em objetos o this vai
  se referir a instância e pode acessar suas propioedades.
*/


console.log(this)

this.alert("Hello World!")

const obj = {
  nome: "Zezinho",
  idade: 28,
  casado: false,
  falar: function() {
    console.log("Olá, tudo bem?")
  },
  dizerNome: function() {
    console.log("Meu nome é " + this.nome)
  },
  aniversario: function() {
    this.idade ++
  },
  saudacao: function() {
    return "Olá, Sr. " + this.nome + "!"
  }

}
obj.dizerNome()

console.log(obj.idade)

obj.aniversario()
console.log(obj.idade)

obj.aniversario()
obj.aniversario()
obj.aniversario()
obj.aniversario()
console.log(obj.idade)

let sdc = obj.saudacao()

console.log(sdc)
