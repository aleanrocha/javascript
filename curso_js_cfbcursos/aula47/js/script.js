/*

let valores = [1,2,3]

let op = [
    (val) => {
        let res = 0
        for (v of val) {
            res += v
        }
        return res 
    },
    (val) => {
        let res = 1
        for (v of val) {
            res *= v
        }
        return res
    },
    (val) => {
        for(v of val) {
            console.log(v)
        }
    }
]

// console.log(op[1](valores))

// op[2](valores)

*/


const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')

const res = document.getElementById('res')


const operacoes = [
    () => {
        // cria uma array com os valores do input
        let valores = [
            document.getElementById('i-num1').value,
            document.getElementById('i-num2').value
        ]
        // transforma os valores do input para Number e faz o cálculo
        let calc = Number(valores[0]) - Number(valores[1])
        // adiciona o meu resultado na minha div de resultado final
        res.innerHTML = `Resultado: ${valores[0]} - ${valores[1]} = ${calc}`
    },
    () => {
        let valores = [
            document.getElementById('i-num3').value,
            document.getElementById('i-num4').value
        ]
        let calc = Number(valores[0]) + Number(valores[1])
        res.innerHTML = `Resultado: ${valores[0]} + ${valores[1]} = ${calc}`
    },
    () => {
        let valores = [
            document.getElementById('i-num5').value,
            document.getElementById('i-num6').value
        ]
        let calc = Number(valores[0] * Number(valores[1]))
        res.innerHTML = `Resultado: ${valores[0]} x ${valores[1]} = ${calc}`
    },
    () => {
        let valores = [
            document.getElementById('i-num7').value,
            document.getElementById('i-num8').value
        ]
        let calc = Number(valores[0] / Number(valores[1]))
        res.innerHTML = `Resultado: ${valores[0]} / ${valores[1]} = ${calc}`
    }
]

btn1.addEventListener('click', ()=> {
    operacoes[0]()
})
btn2.addEventListener('click', ()=> {
    operacoes[1]()
})
btn3.addEventListener('click', ()=> {
    operacoes[2]()
})
btn4.addEventListener('click', ()=> {
    operacoes[3]()
})