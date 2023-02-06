// pegando elementos pela TAG - DOM

let h4 = document.getElementsByTagName('h4')

// pega o primeiro elemento h4 e printa na tela
alert(h4[0].innerHTML)

for(let i = 0; i < h4.length; i++) {
    h4[i].innerHTML = 'Manipulando via JS!'
}