// Trabalhando com conversão de objetos para Json

const obj = {
    nome: 'Zezinho',
    idade: 24,
    sexo: 'Masculino',
    profissao: 'Estudante',
    curso: 'JavaScript',
    aulas: {
        aula01: 'Introdução',
        aula02: 'Variáveis',
        aula03: 'Condições'
    }
}

/*
console.log(obj)
console.log(obj.curso)

console.log(obj.aulas)
console.log(obj.aulas.aula01)
*/

console.log('=========================')
console.log('OBJETO')
console.log('=========================')

console.log(obj)

// convertendo objeto para JSON

console.log('=========================')
console.log('OBJETO CONVERTIDO EM JSON')
console.log('=========================')

const objeto_para_json = JSON.stringify(obj)

console.log(objeto_para_json)

// convertendo JSON para objeto

console.log('=========================')
console.log('JSON CONVERTIDO EM OBJETO')
console.log('=========================')

const string_json = '{"nome":"Zezinho","idade":24,"sexo":"Masculino","profissao":"Estudante","curso":"JavaScript","aulas":{"aula01":"Introdução","aula02":"Variáveis","aula03":"Condições"}}'

const json_para_objeto = JSON.parse(string_json)

console.log(json_para_objeto)
