/*
======================
Operações aritméticas
======================
+ adição 
- subtração 
* multiplicação
** divisão inteira  
/ divisão 
% resto da divisão 
++ incremento 
-- decremento

*/

/*
let n1 = 10, n2 = 20
console.log(n1,n2)

let n3 = 30
let n4 = 40

console.log(n3)
console.log(n4)

let n5 = n1+n2+n3+n4
console.log(n5)
*/

let n1=0,n2=0,res=0

n1 = 25
n2 = 25
//res = n1+n2 //adição 
//res = (n2+n2) * 2 //adição e multiplicação 
res = ((n1+n2) *2) / 2 // soma multiplica e divide 
console.log(res)

n1 = 15
n2 = 2
//res = n1/n2 //divisão 
res = n1%n2 //resto da divisão
console.log(res)

n1 = 7
n1++ //incremento
n1++
console.log(n1)

n1 = 12
n1--
n1--
console.log(n1)