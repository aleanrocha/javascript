// Utilizando objetos com métodos

const obj = {
  nome: "Zezinho",
  idade: 28,
  casado: false,
  falar: function() {
    console.log("Olá, tudo bem?")
  },
  soma: function(x, y) {
    return x * y
  }

}

console.log(obj.nome)
console.log(obj.idade)

obj.falar()

console.log(obj.soma(50, 5))