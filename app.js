var url = "https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0";

function renderPokemons(pokemons) {
    for (var i=0 ; i < pokemons.length ; i++){
        var pokemonName = pokemons[i].name;
        var content = document.getElementById("content");
        var pokemonIndex = i+1;
        // var pokemonimg = "https://img.pokemondb.net/artwork/"+pokemons[i].name+".jpg";
        // var pokemonimg = "https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/"+pokemonIndex+".png?raw=true"
        var pokemonimg = "https://img.pokemondb.net/sprites/sun-moon/icon/"+pokemonName+".png"
        var pokemonHTML=`
        <div>
            <h3>${pokemonIndex}</h3>
            <img src = ${pokemonimg}>
            <h2>${pokemonName}</h2>
        </div>
        `
        content.insertAdjacentHTML("beforeend", pokemonHTML);
    };
};
function fetchPokemons() {
    sendGetRequest(url, function(pokemons){
        var pokemons= pokemons.results;
        console.log(pokemons)
        renderPokemons(pokemons);
    });
};

function setUpEvents() {
    var btnSearch = document.getElementById("btn_search");
    btnSearch.addEventListener("click", function(e){
    var searchBar = document.getElementById("search_bar");
    var searchString = searchBar.value.toLowerCase();
    var url=`https://pokeapi.co/api/v2/pokemon/${searchString}`;
    ;
    sendGetRequest(url, function(pokemonsSearch){
        var pokemonsSearch= pokemonsSearch;
        renderPokemon(pokemonsSearch);
    })
});      
}
function renderPokemon(pokemonsSearch) {
    var pokemonName = pokemonsSearch.forms[0].name;
    var pokemonID = pokemonsSearch.id
    var content = document.getElementById("content");
    content.textContent = ""
    // var pokemonimg = "https://img.pokemondb.net/artwork/"+pokemonsSearch.name+".jpg";
    // var pokemonimg = "https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/"+pokemonID+".png?raw=true"
    var pokemonimg = "https://img.pokemondb.net/sprites/sun-moon/icon/"+pokemonName+".png"
    var pokemonHTML=`
    <div>
        <h3>${pokemonID}</h3>
        <img src = ${pokemonimg}>
        <h2>${pokemonName}</h2>
    </div>
    `
    content.insertAdjacentHTML("beforeend", pokemonHTML);
    ;
};
fetchPokemons() ;
setUpEvents() ; 

