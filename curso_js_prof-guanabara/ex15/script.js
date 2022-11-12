function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#ano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else {
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked) {
            genero = 'homen'
            if (idade > 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/criancah.png') 
            } else if (idade < 26) {
                //jovem
                img.setAttribute ('src', 'imagens/jovemh.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adultoh.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idosoh.png')
            }     
        }
        else {
            genero = 'mulher'
            if (idade > 0 && idade <10) {
                //criança
                img.setAttribute('src', 'imagens/criancam.png')
            } else if (idade < 26) {
                //jovem
                img.setAttribute('src', 'imagens/jovemm.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adultom.png')
            } else {
                //idosa
                img.setAttribute('src', 'imagens/idosam.png')
            }
        }  
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
