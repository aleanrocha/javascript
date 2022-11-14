/*

[10] [11].   [10] [11].  [10] [11]
            
1 - 1 = 1.   1 - 1 = 1.   1 - 1 = 0
0 - 1 = 0.   0 - 1 = 1.   0 - 0 = 0
                          1 - 0 = 1

    &.           |.           ^
   AND.          OR.         XOR
   
000010[10].  000010[10].  000010[10]

000010[11].  000010[11].  000010[11]
    =.           =.           =
000010[10].  000010[11].  000000[01]

*/


let n1=10, n2=11, res=0

res = n1 & n2
console.log(res)

res = n1 | n2
console.log(res)

res = n1 ^ n2
console.log(res)

n1 = 20
// deslocando um bit para à esquerda 
res = n1 << 1 // dobra o valor deslocando para esquerda 
console.log(res)


//deslocando um bit oara à direita
res = n1 >> 1 // reduz o valor pela metade
console.log(res)

