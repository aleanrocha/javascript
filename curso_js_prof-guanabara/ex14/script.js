function carregar() {
    var msg = document.getElementById('msg')
    var msg2 = document.getElementById('msg2')
    var img = document.getElementById('img')
    var agora = new Date()
    var hora = agora.getHours()
    var minutos = agora.getMinutes()
    msg.innerHTML = `Agora são exatamente <strong>${hora}:${minutos}</strong>`
    if (hora >= 0 && hora < 12) {
        msg2.innerHTML = 'Bom dia!'
        img.src = 'imagens/manha.png'
        document.body.style.backgroundColor = '#e2cd9f'
    }
    else if (hora >= 12 && hora <= 18) {
        msg2.innerHTML = 'Boa tarde!'
        img.src = 'imagens/tarde.png'
        document.body.style.backgroundColor = '#febb60'
    }
    else {
        msg2.innerHTML = 'Boa noite!'
        img.src = 'imagens/noite.png'
        document.body.style.backgroundColor ='#0a0d19'
    }
}