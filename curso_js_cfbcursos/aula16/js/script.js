let num = 0
/*
while (num<100) {
    console.log(num)
    num++
}
*/

let n = prompt('Verificar Fatorial: ')
let fat = 1
// fatorial ex: 5! 5*4*3*2*1 = 120
while (n>=1) {
    fat*=n
    n--
}
alert(fat)