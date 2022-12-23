// Basicamente Um ARRAY é uma coleção de
// elementos que guarda dados

const box = document.getElementById('caixa')

let courses = ['HTML','CSS','JAVASCRIPT']


console.log(courses[0])
console.log(courses[1])
console.log(courses[2]='PHP')
console.log(courses[3]='NODEJS')


// adicionando novo elemento no início

courses.unshift('REACT')
courses.unshift('ANGULAR')

// removendo elementos no início 

courses.shift()
courses.shift()

// adicionando novo elemento no final
 
courses.push('PHP')
courses.push('PYTHON')
courses.push('RUBY')
courses.push('C++')

// removendo o último elemento

courses.pop()
courses.pop()

courses.map((el)=>{
    let p = document.createElement('p')
    p.innerHTML = el 
    box.appendChild(p)
})

// ##########################################

let cores = ['verde','azul','branco',['claro','escuro','transparente']]

let nomes = ['Pedro', 'João', 'Guilherme',cores]

console.log(nomes[3][2])
console.log(nomes[3][3][2])