// Trabalhando com datas em JavaScript parte2

/*

let data = new Date()

// pega o dia atual

alert(data.getDate())

// pega o mes atual 
alert(data.getMonth()+1)

// pega o ano atual
alert(data.getFullYear())

*/

//padrão americano m/d/a

// data personalizada
let date = new Date('02/05/2023')

let date2 = new Date('02/07/2023')

alert(date.getDate())

// comparando as datas 

// representação da data em milisegundos
// alert(date.getTime())

let diferenca = ((date2.getTime() - date.getTime()) / (1000 * 3600 * 24))
alert(diferenca)
