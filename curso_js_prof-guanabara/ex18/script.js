function tabuada() {
				var num = document.querySelector('input#txtn')
				var tab = document.querySelector('select#seltab')
				if (num.value.length == 0) {
								alert('[ERRO] digite um número!')
				} else {
								var n = Number(num.value)
								tab.innerHTML = ' '
								var c = 1
								while (c <= 10) {
												var item = document.createElement('option')
												item.text = `${n} × ${c} = ${n*c}`
												tab.appendChild(item)
												c++
								}
				}
}
function tabuada() {
				var num2 = document.querySelector('input#txtn')
				var tab2 = document.querySelector('select#seltab2')
				if (num2.value.length == 0) {
								alert('[ERRO] digite um número!')
				} else {
								var n2 = Number(num2.value)
								tab2.innerHTML = ' '
								var c2 = 1
								while (c2 <= 10) {
												var item2 = document.createElement('option')
												item2.text = `${n2} + ${c2} = ${n2+c2}`
												tab2.appendChild(item2)
												c2++
								}
				}
}
