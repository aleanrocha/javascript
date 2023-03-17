// pegar todos os inputs do tipo radio
// percorrer os inputs e adicionar um evento de change
// verificar se a opção que estamos marcando é correta ou incorreta
// pegar o elemento pai da opção correta ou incorreta e aplicar as devidas cores
// depois de selecionar a resposta deixar o botão desabilitado

const inpRadio = document.querySelectorAll("input[type=radio]")

for (let i = 0 ; i < inpRadio.length ; i++) {
  const element = inpRadio[i]
  element.addEventListener("change", (e) => {
    const radio = e.target.value
    if (radio == "correto") {
      // let el = e.target.previousElementSibling.style.background = "green"
      let parentNode = e.target.parentNode
      parentNode.style.background = "green"
      let els = parentNode.parentNode.querySelectorAll("input[type=radio]")
      for (let i = 0 ; i < els.length ; i++) {
        els[i].disabled = true
      }
    } else if (radio == "incorreto") {
      // let el = e.target.previousElementSibling.el.style.background = "red"
      let parentNode = e.target.parentNode
      parentNode.style.background = "red"
      let els = parentNode.parentNode.querySelectorAll("input[type=radio]")
      for (let i = 0 ; i < els.length ; i++) {
        els[i].disabled = true
      }
      let correto = parentNode.parentNode.querySelector("[value=correto]")
      correto.parentNode.style.background = "green"
    }
  })
}