// Trabalhando com Arrow Functions

// forma tradicional de declarar funções

function hello() {
    alert('Olá mundo')
}
hello()


// forma moderna utilizando arrow function

const soma = () => {
    let num1 = prompt('Digite um número: ')
    let num2 = prompt('Digite outro número: ')
    let soma = (Number(num1)+Number(num2))
    alert(`${num1} + ${num2} = ${soma}`)
}
soma()



const test = (par) => {
    par()
}

test(()=> {
    console.log('Tudo certo.')
})