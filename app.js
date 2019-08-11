var url = "https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0";

function renderPokemons(pokemons) {
    for (var i=0 ; i < pokemons.length ; i++){
        var pokemonName = pokemons[i].name;
        var content = document.getElementById("content");
        var pokemonIndex = i+1;
        var pokemonimg = "https://img.pokemondb.net/artwork/"+pokemons[i].name+".jpg";
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
        var pokemonsSearch= pokemonsSearch.forms[0];
        renderPokemon(pokemonsSearch);
    })
});      
}
function renderPokemon(pokemonsSearch) {
    var pokemonName = pokemonsSearch.name;
    var content = document.getElementById("content");
    content.textContent = ""
    var pokemonimg = "https://img.pokemondb.net/artwork/"+pokemonsSearch.name+".jpg";
    var pokemonHTML=`
    <div>
        <img src = ${pokemonimg}>
        <h2>${pokemonName}</h2>
    </div>
    `
    content.insertAdjacentHTML("beforeend", pokemonHTML);
    ;
};
fetchPokemons() ;
setUpEvents() ; 

