function contar() {
				var inicio = document.querySelector('input#in')
				var fim = document.querySelector('input#fim')
				var passo = document.querySelector('input#pa')
				var res = document.querySelector('div#res')
				
				if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
								alert('[ERRO] Verifique os dados!')
				}
				else {
								res.innerHTML = 'Contando: '
								var i = Number(inicio.value)
								var f = Number(fim.value)
								var p = Number(passo.value)
								if (p <= 0) {
												alert('[ERRO] passo ínvalido, considerando passo 1')
												p = 1
								}
								// ordem crescente
								if (i < f) {
												for(var c = i;c <= f;c += p) {
																res.innerHTML += ` ${c} \u{1F449} `
												}
								}
								// ordem decrescente
								else {
												for (var c = i;c >= f;c -= p) {
																res.innerHTML += ` ${c} \u{1F449} `
												}
								}
							res.innerHTML += ` \u{1F3C1} `
				}
}











