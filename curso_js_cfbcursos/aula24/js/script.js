// forma tradicional 
//const f = function (v1,v2){return v1+v2}

// arrow function 
const f = (v1,v2)=>{return v1+v2}
console.log(f(6,7))

//quando se tem apenas um parâmetro não e
//necessário colocar os parênteses
const f2  = n=>{return n}
console.log(f2('JS'))

//se for uma operação simples eu não preciso utilizar o return
const f3 = n => n+10
console.log(f3(5))

