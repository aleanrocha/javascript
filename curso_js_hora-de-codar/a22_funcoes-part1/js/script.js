/*
 Funções são blocos de códios reutilizáveis,
 ou seja, evitamos a repetição da lógica de um
 programa em diversas parts do código
 para uma função ser executada ela precisa ser invocada.


 Funções são blocos de construção fundamentais em JavaScript. 
 Uma função é um procedimento de JavaScript - um conjunto de instruções
 que executa uma tarefa ou calcula um valor. Para usar uma função, você deve defini-la
 em algum lugar no escopo do qual você quiser chamá-la.
*/


// função tradicional

function primairaFuncao() {
  console.log("Minha primera função em javascript...")
}

// invocando a função
 primairaFuncao()
 primairaFuncao()
 primairaFuncao()


 // função com parâmetro

 function meuNome(nome) {
  console.log("Meu nome é " + nome)
 }

 meuNome("João")
 meuNome("Pedro")
 meuNome("José")


 // função com retorno

 function soma(x, y) {
  return x + y
 }

 console.log("A soma é igual a " + soma(7, 9))
