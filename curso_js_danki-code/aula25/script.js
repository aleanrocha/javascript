// Trabalhando com BLOCK SCOPES

{
    // vai ser defenido apenas nesse escopo

    // var nome = 'JavaScript' // tem que utilizar (let - variável de escopo)

    let nome = 'JavaScript' 
    console.log(nome)

    // function soma(n1,n2) {
    //     return n1 + n2
    // }

    let soma = function(n1,n2) {
        return n1+n2
    }
    console.log(soma(2,2))
}

// vai dar erro pois a variável foi definida
// dentro de um escopo 

console.log(soma(2,2))


console.log(nome)
