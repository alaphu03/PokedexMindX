var url = "https://pokeapi.co/api/v2/pokedex/6/";

function openDetail() {
    var character_div = document.getElementsByClassName("PokemonCard")
    for (i=0;i<character_div.length;i++) {
        var character = character_div[i]
        character.addEventListener("click",function (e) {
            var div_clicked = e.target.parentNode
            var id = div_clicked.id 
            window.open(`Pokemon.html?id=${id}`,"_self")         
        }) 
    }
}


function renderPokemons(Pokemons) {
    var content = document.getElementsByClassName("main-area")[0]
    for (var i = 0; i <Pokemons.length; i++){
        var Pokemon = Pokemons[i];
        var pokemon_ID = Pokemon.entry_number;
        var pokemonname = Pokemon.pokemon_species.name;
        var imgSrc = 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/'+pokemonname+'.png';
        var pokemonHTML=`
        <div id="${pokemon_ID}" class="PokemonCard">
          
                    <img id="img" src="${imgSrc}">
                    <div id="pkm_container">
                        <small id="PokemonID">#${pokemon_ID}</small>
                        <br>
                        <small id="PokemonName">${pokemonname}</small>
                        <br>
                    </div>
     
        </div>
        
            `;
            content.insertAdjacentHTML("beforeend", pokemonHTML);

        }
        openDetail()
    }
function renderPokemonSearch(SearchPokemon) {
    var content = document.getElementsByClassName("main-area")[0]
    content.textContent='';
    var pokemon_ID = SearchPokemon.id;
    var pokemonname = SearchPokemon.forms[0].name;
    var imgSrc = 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/'+pokemonname+'.png';
    var pokemonHTML=`
    <div id="${pokemon_ID}" class="PokemonCard">
      
                <img id="img" src="${imgSrc}">
                <div id="pkm_container">
                    <small id="PokemonID">#${pokemon_ID}</small>
                    <br>
                    <small id="PokemonName">${pokemonname}</small>
                    <br>
                </div>
     
    </div>
    
        `;
        content.insertAdjacentHTML("beforeend", pokemonHTML);
    openDetail()
    }
  
function fetchPokemons(){
    var pokedexfullURL = `${url}`;
    sendGetRequest(pokedexfullURL, function(Pokemonss) {
        var Pokemons = Pokemonss.pokemon_entries;
        // console.log(Pokemons);
        renderPokemons(Pokemons)
    });
}

btnSearch= document.getElementById('btn_search');
btnSearch.addEventListener('click', function(e){
    var searchBar = document.getElementById('search_bar');
    var searchStringg = searchBar.value;
    var searchString = searchStringg.toLowerCase();
    if (searchString != ""){
        var url =`https://pokeapi.co/api/v2/pokemon/${searchString}`;
    }
    sendGetRequest(url, function(respondeData){
        var SearchPokemon = respondeData;
        renderPokemonSearch(SearchPokemon);
    })
})
fetchPokemons();
