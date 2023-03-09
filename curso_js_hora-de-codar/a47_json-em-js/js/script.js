/*

  JSON => JavaScript Object Notation
  Um formato de representação de dados
  Mais simples que XML, que é utilizado para fins parecidos
  Utiliza o formato de chave e valor
  é leve para ser enviado por requisições
  Muito utilizado para API e também arquivos de configuração.

*/

const objs = [
  {
    nome: "Zezinho",
    idade: 32,
    sexo: "M",
    trabalhando: true,
    detanhes_profissao: {
      profissao: "Programador",
      empresa: "empresa x",
    },
    hobbies: ["Filmes", "Dormir", "Estudar", "Programar"],
    casado: false,
  },
  {
    nome: "Paulinha",
    idade: 25,
    sexo: "F",
    trabalhando: true,
    detanhes_profissao: {
      profissao: "Advogada",
      empresa: "empresa y",
    },
    hobbies: ["Ler", "Estudar", "Correr", "Tocar violão"],
    casado: false,
  }
]

//console.log(objs)

// Converter objeto para JSON

const jsonData = JSON.stringify(objs)
console.log(jsonData)
console.log(typeof jsonData)

// Converter JSON para objeto

const jsonObj = JSON.parse(jsonData)
console.log(jsonObj)
console.log(typeof jsonObj)