/*
  Array - Os Arrays são considerados objetos em javascript,
  porém servem como listas, podemos ter items de qualquer tipo de dado
  porém não por chave e valor, e sim por índice.

  Arrays são objetos semelhantes a listas que vêm com uma série de métodos embutidos para realizar operações de travessia e mutação. Nem o tamanho de um array JavaScript nem os tipos de elementos são fixos. Já que o tamanho de um array pode ser alterado a qualquer momento e os dados podem ser armazenados em posições não contíguas, arrays JavaScript não tem a garantia de serem densos; isso depende de como o programador escolhe usá-los. De uma maneira geral, essas são características convenientes, mas, se esses recursos não são desejáveis para o seu caso em particular, você pode considerar usar arrays tipados.  
*/

let arr = [1,2,3,4,5,6,7,8,9]
console.log(arr)
console.log("Tipo: " + typeof arr)

console.log(arr[0])

arr[9]=10

console.log(arr)

let arr2 = [210, "Zé", true, {nome: "Zezinho", idade: 22, sexo: "M", profissao: "Programador", casado: false}]

console.log(arr2)

console.log(arr2[1])