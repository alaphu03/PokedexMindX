var url = "https://pokeapi.co/api/v2/pokedex/9";
function renderPokemons(Pokemons) {
    var content = document.getElementById("content")
    content.textContent=""
    for (var i = 0; i <Pokemons.length; i++){
        var Pokemon = Pokemons[i];
        var pokemonID = Pokemon.entry_number;
        var pokemon_name = Pokemon.pokemon_species.name;
        var imgSrc = 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/'+pokemon_name+'.png';
        var pokemonHTML=`
        <div id="PokemonCard" >
            <div id="img_container">
                <img id="img" src="${imgSrc}">
            </div>
            <span id="Pokemon_container">
                <small id="PokemonID">#${pokemonID}</small>
                <br>
                <small id="PokemonName" class="PokemonName">${pokemon_name}</small>
                <br>
            </span>
        </div>
            `;
            content.insertAdjacentHTML("beforeend", pokemonHTML);
            var btn = document.getElementById("PokemonCard")
            btn.addEventListener("click", function(gg){
                console.log('1')
            })
        }
    }

function fetchPokemons(){
    var fullURL = `${url}`;
    sendGetRequest(fullURL, function(Pokemonss) {
        var Pokemons = Pokemonss.pokemon_entries;
        renderPokemons(Pokemons)
    });
}
// function setUpEvents() {
//     var btnSearch = document.getElementById("btn_search");
//     btnSearch.addEventListener("click", function(e){
//     var searchBar = document.getElementById("search_bar");
//     var searchString = searchBar.value;
//     var key = marvelKey(privateKey, publicKey);
//     var fullURL=`${url}?${key}&nameStartsWith=${searchString}`;
//     sendGetRequest(fullURL, function(responseData){
//         var Pokemons = responseData.data.results;
//         renderPokemons(Pokemons)
//     })
// });      
// }

fetchPokemons();
// setUpEvents();