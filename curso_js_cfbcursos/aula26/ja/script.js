/*
Funções geradores tem seu retorno adiado
até o momento que agente precisa desse retorno 
*/


/*
function* cores() {
    yield "Red",
    yield "Green"
    yield "Blue"
}

let itc = cores()

console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
*/

/*
function * perguntas() {
    const nome = yield "Qual o seu nome?"
    const sport = yield "Qual o seu esporte favorito?"
    return `Meu nome é ${nome} e meu esporte favorito é ${sport}.`
}

const itp = perguntas()

console.log(itp.next().value)
console.log(itp.next('Zezinho').value)
console.log(itp.next('Footebol').value)
*/

function* contador(){
    let n = 0
    while (true) {
       yield ++n
       if (n>=20) {
           break
       }
    }
    return n
}

const itc = contador()

/*
for (let i = 0; i < 59; i++) {
    console.log(itc.next().value)
}
*/

for (i of itc) {
    console.log(itc.next().value)
}
