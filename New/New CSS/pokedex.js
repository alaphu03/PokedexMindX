var url = "https://pokeapi.co/api/v2/pokedex/1";
function renderPokemons(Pokemons) {
    var content = document.getElementById("content")
    content.textContent=""
    for (var i = 0; i <Pokemons.length; i++){
        var Pokemon = Pokemons[i];
        var pokemonID = Pokemon.entry_number;
        var pokemon_name = Pokemon.pokemon_species.name;
        if (Pokemon.pokemon_species.name == "nidoran-m"){
            var pokemonHTML=`
            <div id="PokemonCard">
                <div id="img_container">
                    <img id="img" src="${imgSrc}">
                </div>
                <div id="Pokemon_container">
                    <h2 id="PokemonID">${pokemonID}</h2>
                    <h3 id="PokemonName">${pokemon_name}</h3>
                </div>
            </div>
            `;
            content.insertAdjacentHTML("beforeend", pokemonHTML);
        }
        else {
            var imgSrc = 'https://www.pkparaiso.com/imagenes/xy/sprites/animados/'+pokemon_name+'.gif';
            var pokemonHTML=`
            <div id="PokemonCard">
                <div id="img">
                    <img  src="${imgSrc}">
                </div>
                <div id="Pokemon_container">
                    <h2 id="PokemonID">#${pokemonID}</h2>
                    <h3 id="PokemonName">.${pokemon_name}</h3>
                </div>
            </div>
            `;
            content.insertAdjacentHTML("beforeend", pokemonHTML);
        }
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