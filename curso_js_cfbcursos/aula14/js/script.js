/*

Uma estrutura de repetição e uma estrutura
que vai repetir uma comando ou um bloco de comandos
sempre que vamos fazer esse processo de repetição
dizemos que vamos fazer um LOOP

cada repetição que o loop executar e chamada de
ITERAÇÃO.

loop - definidos = FOR
usado quando sabemos quantas vezes vamos precisar
iterar um bloco de comandos


loop - indefinidos = while e do while
usado quando não sabemos a quantidade de vezes 
que vamos precisar iterar

*/

//for(let i = 0; i < 10; i++)
    //console.log('Valor do i: ' + i)
    
    
for (let a = 0; a <= 100; a++) {
    if (a%2==0) {
        console.log(a + ' é par.')
    } else {
        console.log(a + ' é ímpar.')
    }
}