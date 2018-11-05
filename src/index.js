let div = document.querySelector('#pokemon-container')
let search = document.querySelector('#pokemon-search-input')
let storedPokemon

//when loading page load data
document.addEventListener('DOMContentLoaded', () => {
  //YOUR CODE HERE
  fetch('http://localhost:3000/pokemon')
    .then(response => response.json())
    .then(data => {
      storedPokemon = data
      data.map(pokemon => {
        renderPokemon(pokemon)
      })
    })
})

//add pokemon to the page
function renderPokemon(pokemon) {
  
  let innerDiv = document.createElement("div")
  innerDiv.className = 'pokemon-container'
  innerDiv.innerHTML = `
  <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
  <h1 class="center-text">${pokemon.name}</h1>
    <div style="width:239px;margin:auto">
      <div class="image-wrapper" style="width:96px;margin:auto">
        <img data-id="2" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
      </div>
    </div>
  </div>`

  //toggle between pokemons if clicked
  innerDiv.addEventListener('click', function() {
    let imageloc = innerDiv.querySelector('.toggle-sprite');
    (imageloc.src === pokemon.sprites.front) ? imageloc.src = pokemon.sprites.back : imageloc.src = pokemon.sprites.front 
  })
  div.appendChild(innerDiv)
}

//add multiple pokemon to the database
renderPokemons = pokemons=> (pokemons.forEach(pokemon => renderPokemon(pokemon)))


//search for pokemon via users input 

search.addEventListener( 'keyup', function() {
  val=search.value
  filteredPokemons = storedPokemon.filter(word => {
    return word.name.includes(val)
})
  document.body.innerHTML = ""
  renderPokemons(filteredPokemons)
})

// eventlistener for input
// match with filter