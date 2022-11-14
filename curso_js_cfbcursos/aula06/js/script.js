/*

===================
Operadores Lógicos
===================
&& -> and e
|| -> or ou
!  -> not não

 */

let n1, n2, n3, n4
n1 = 10
n2 = 5
n3 = 12
n4 = 7

//console.log((n1 > n2) && (n2 > n3)) // false
//console.log((n1 > n2) || (n2 > n3)) // true
//console.log(!(n1 > n2) && (n2 > n3)) // false

if (!(n1 >= n2) || !(n3 >= n4)) {
    console.log('true')
} else {
    console.log('false')
}