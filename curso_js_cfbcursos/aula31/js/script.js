/*
querySelector / all - pega os elementos
através da classe, id ou da própria tag.
*/

// retorna a primeira div que encontrar
const first_div = document.querySelector('div')
console.log(first_div)

// retorna todas as divs que encontrar 
const all_divs = document.querySelectorAll('div')
console.log(all_divs)

// retorna todos os elementos da classe curso
const all_curses = [...document.querySelectorAll('.curso')]
console.log(all_curses)

// retorna o h1 e tods as divs que encontrar
let h1_and_div = document.querySelectorAll('h1,div')
h1_and_div=[...h1_and_div]
console.log(h1_and_div)

