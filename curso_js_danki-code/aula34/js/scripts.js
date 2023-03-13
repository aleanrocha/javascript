// selecionar elementos

const playerImages = document.querySelectorAll("#player-options img")
const enemyImages = document.querySelectorAll("#enemy-options img")
const dialog = document.querySelector(".dialog")
const removeDialog = document.querySelector(".dialog #btn-remove")

let player = ""
let inimigo = ""

// funções

const validarVitoria = () => {
  const imageJogador = document.querySelector(".images-disputa #jogador")
  const imageAdversario = document.querySelector(".images-disputa #adversario")
  const nomeJogador = document.querySelector(".images-disputa .nome-jogador")
  const nomeAdversario = document.querySelector(".images-disputa .nome-adversario")

  if (player == "pedra") {
    imageJogador.setAttribute("src", "./images/rock.png")
    imageJogador.setAttribute("alt", "pedra")
    if (inimigo == "pedra") {
      imageAdversario.setAttribute("src", "./images/rock.png")
      imageAdversario.setAttribute("alt", "pedra")
      dialog.querySelector("h3").innerHTML = "EMPATE: O jogo terminou empatado!"
    } else if (inimigo == "papel") {
      imageAdversario.setAttribute("src", "./images/paper.png")
      imageAdversario.setAttribute("alt", "papel")
      dialog.querySelector("h3").innerHTML = "PERDEU: papel enrola pedra!"
    } else  if (inimigo == "tesoura") {
      imageAdversario.setAttribute("src", "./images/scisor.png")
      imageAdversario.setAttribute("alt", "tesoura")
      dialog.querySelector("h3").innerHTML = "GANHOU: pedra amassa tesoura!"
    }
  }

  if (player == "papel") {
    imageJogador.setAttribute("src", "./images/paper.png")
    imageJogador.setAttribute("alt", "papel")
    if (inimigo == "papel") {
      imageAdversario.setAttribute("src", "./images/paper.png")
      imageAdversario.setAttribute("alt", "papel")
      dialog.querySelector("h3").innerHTML = "EMPATE: O jogo terminou empatado!"
    } else if (inimigo == "pedra") {
      imageAdversario.setAttribute("src", "./images/rock.png")
      imageAdversario.setAttribute("alt", "pedra")
      dialog.querySelector("h3").innerHTML = "GANHOU: papel enrola pedra!"
    } else  if (inimigo == "tesoura") {
      imageAdversario.setAttribute("src", "./images/scisor.png")
      imageAdversario.setAttribute("alt", "tesoura")
      dialog.querySelector("h3").innerHTML = "PERDEU: tesoura corta papel!"
    }
  }

  if (player == "tesoura") {
    imageJogador.setAttribute("src", "./images/scisor.png")
    imageJogador.setAttribute("alt", "tesoura")
    if (inimigo == "tesoura") {
      imageAdversario.setAttribute("src", "./images/scisor.png")
      imageAdversario.setAttribute("alt", "tesoura")
      dialog.querySelector("h3").innerHTML = "EMPATE: O jogo terminou empatado"
    } else if (inimigo == "papel") {
      imageAdversario.setAttribute("src", "./images/paper.png")
      imageAdversario.setAttribute("alt", "papel")
      dialog.querySelector("h3").innerHTML = "GANHOU: tesoura corta papel!"
    } else  if (inimigo == "pedra") {
      imageAdversario.setAttribute("src", "./images/rock.png")
      imageAdversario.setAttribute("alt", "pedra")
      dialog.querySelector("h3").innerHTML = "PERDEU: pedra amassa tesoura!"
    }
  }

  nomeJogador.innerHTML = player
  nomeAdversario.innerHTML = inimigo
}

const resetInimigo = () => {
  for (let img = 0 ; img < enemyImages.length ; img++) {
      enemyImages[img].style.opacity = .3
  }
}

const inimigoJogar = () => {
  const rand = Math.floor(Math.random()*3)
  resetInimigo()
  for (let img = 0 ; img < enemyImages.length ; img++) {
    if (img == rand) {
      enemyImages[img].style.opacity = 1
      inimigo = enemyImages[img].getAttribute("alt")
    }
  }
  validarVitoria()
}

const resetOpacityPlayer = () => {
  playerImages.forEach(img => {
    img.style.opacity = 0.3
  })
}

// eventos

playerImages.forEach(img => {
  img.addEventListener("click", (e) => {
    resetOpacityPlayer()
    e.target.style.opacity = 1
    player = e.target.getAttribute("alt")
    inimigoJogar()
    setTimeout(() => {
      dialog.classList.remove("hide")
    }, 1000)
  })
})

removeDialog.addEventListener("click", () => {
  dialog.classList.add("hide")
})