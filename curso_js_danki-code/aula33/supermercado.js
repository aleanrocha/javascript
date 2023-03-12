// selecionar elementos

const btnCadastrar = document.querySelector("form input[type=submit]")

// criar array para armazenar os produtos

let items = []

// função para criar e adicionar os novos produtos
function criarProduto(nome, valor) {
  const listaProdutos = document.querySelector("#lista-produtos")
  const produto = document.querySelector(".template-produto")
  const newProduto = produto.cloneNode(true)
  newProduto.querySelector("h3").textContent = nome
  newProduto.querySelector("span").textContent = valor
  newProduto.classList.remove("template-produto")
  newProduto.classList.remove("hide")

  // remover o produto
  newProduto.querySelector(".btn-remove").addEventListener("click", (e) => {
    const span = document.querySelector("#res span")
    span.innerHTML = (Number.parseFloat(span.textContent) - Number.parseFloat(valor)).toFixed(2)
    items = []
    e.target.parentNode.parentNode.remove()
  })

  listaProdutos.appendChild(newProduto)
}

// função de cadastro de produtos

function cadastro() {
  const nomeProduto = document.querySelector("input[name=nome_produto")
  const valorProduto = document.querySelector("input[name=preco_produto")
  if (nomeProduto.value != "" && valorProduto.value != "") {

    items.push({
      nome: nomeProduto.value,
      valor: valorProduto.value
    })

    // chamar a função des novos produtos

    criarProduto(nomeProduto.value, valorProduto.value)

    let soma = 0

    items.map(item => soma += Number.parseFloat(item.valor))

    // exibir soma total dos produtos

    const res = document.querySelector("#res h3 span")
    res.innerHTML = soma.toFixed(2)

    // limpar campus

    nomeProduto.value = ""
    valorProduto.value = ""

  } else {
    alert("Por favor, insira os dados corretamente!")
  }
}

/// adicionar evento de click no botão cadastrar

btnCadastrar.addEventListener("click", (evt) => {
  evt.preventDefault()
  cadastro()
})
