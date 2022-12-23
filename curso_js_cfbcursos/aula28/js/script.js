/*
Utilizando o operador THIS
*/

function aluno(nome,nota) {
    // this faz referência ao elemento da função
    // this e como se fosse uma variável
    //vnome = nome
    this.nome = nome
    this.nota = nota
    //console.log(nome)
    //console.log(nota)
    
    this.dados_anonimo = function() {
    // o setTimeout cria uma nova instância que não
    // possui o this nome e nota. Podemos contornar
    // esse problema utilizando arrrow function 
        setTimeout(function() {
           console.log(this.nome) 
           console.log(this.nota)
        },2000)
    }
    
    this.dados_arrow = function() {
    // utiliza o contexto do root
        setTimeout( () => {
           console.log(this.nome) 
           console.log(this.nota)
        },2000)
    }
}
//aluno('JS',10)
const al1 = new aluno('JavaScript', 9.9)
al1.dados_anonimo()
al1.dados_arrow()