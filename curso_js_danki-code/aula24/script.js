// Trabalhando com Template Strings

let nome = 'Zezinho'
let idade = 27
let sexo = 'M'
let casado = false

// forma tradiional

console.log('Meu nome é ' + nome + ' tenho ' + idade + ' anos.')
console.log('sexo: ' + sexo)
console.log('casado: ' + casado)

// utilizando template string (``)

console.log('---------- Template String ----------')

console.log(`Meu nome é ${nome} tenho ${idade} anos
sexo: ${sexo}
casado: ${casado}

`)