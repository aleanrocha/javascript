// Funções de String parte 2


let frase = "Tudo posso naquele que me fortaleçe!"

// toLowerCase => Caixa baixa

console.log(frase.toLowerCase())

// toUpperCase => Caixa Alta

console.log(frase.toUpperCase())

// trim => Desconsidera os espaços

let nome = "       Javascript        "

console.log(nome)

let nomeTrim = nome.trim()

console.log(nomeTrim)

// split => Divide uma frase e transforma em um array

let cursos = "PHP, JAVA, RUBY, PYTHON, JAVASCRIPT, NODEJS, LINUX, REDES, REACT"

console.log(frase.split(" "))
console.log(nomeTrim.split(""))
console.log(cursos.split(", "))

// lastIndexOf => retorna a última palavra específicada

let teste = ("testando com testes grandes e sempre testando o teste para ver se tá tudo testado")
console.log("------------------------------------------")
console.log(teste)
console.log("Procurando 'testando' com indexOf começa na posição => " + teste.indexOf("testando"))
console.log("Procurando 'testando' com lastIndexOf começa na posição => " + teste.lastIndexOf("testando"))
console.log("------------------------------------------")
