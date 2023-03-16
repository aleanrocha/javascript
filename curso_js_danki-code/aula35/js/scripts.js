const quantidade  = document.querySelector("#quantidade")
const btnQuantidade = document.querySelector("#btn-quant")

// funcões

function exibirPokemon(pokemons, quantidade) {
  if (pokemons.length == quantidade) {
    // finalizamos nossas requisições
    let pokemonBoxe = document.querySelector("#pokemons")
    pokemonBoxe.innerHTML = ""
    pokemons.map((val) => {
      pokemonBoxe.innerHTML += `
      <div class="pokemon-box">
        <img src="${val.imagem}" alt="imagem do ${val.nome}">
        <p>${val.nome}</p>
        <p>${val.info}</p>
      </div> 
      `
    })
  }
}

function pegarPokemon(quantidade) {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${quantidade}`
  fetch(url)
  .then(response => response.json())
  .then(allpokemons => {
    let pokemons = []
    allpokemons.results.map((val) => {
      fetch(val.url)
      .then(response => response.json())
      .then(pokemonSingle => {
        pokemons.push({
          nome:val.name,
          imagem:pokemonSingle.sprites.front_default,
          info:pokemonSingle.types.map(info => info.type.name).join(" <> ")
        })
        exibirPokemon(pokemons, quantidade)
      })
    })
  })
}
pegarPokemon(3)

// eventos 

btnQuantidade.addEventListener("click", () => {
  pegarPokemon(quantidade.value)
  quantidade.value = ""
})
