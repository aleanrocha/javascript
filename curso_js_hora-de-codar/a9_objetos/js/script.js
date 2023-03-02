/*
  Um objeto funciona como um array de outras linguagens
  podemos criar propiedades com chave e valor
  a ideia é guardar um conjunto de valores para utilizar posteriormente

  O construtor Object cria um wrapper de objeto para o valor fornecido. Se o valor for null ou undefined, ele criará e retornará um objeto vazio, caso contrário, retornará um objeto de um Type que corresponde ao dado valor. Se o valor já for um objeto, ele retornará o valor.
*/

let obj = {
  nome: "Zezinho",
  idade: 22,
  sexo: "M",
  profissao: "Programador",
  casado: false
}

console.log(obj)
console.log("Dado do tipo: " + typeof obj)

console.log("-------------------------")
console.log("Nome: " + obj.nome)
console.log("Idade: " + obj.idade)
console.log("Sexo: " + obj.sexo)
console.log("-------------------------")

obj.nome = "João"
obj.graduacao = "ADS"

console.log(obj)