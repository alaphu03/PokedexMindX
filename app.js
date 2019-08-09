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

// function setUpEvents() {
//     var btnSearch = document.getElementById("btn_search");
//     btnSearch.addEventListener("click", function(e){
//     var searchBar = document.getElementById("search_bar");
//     var searchString = searchBar.value;
//     var fullURL=`https://pokeapi.co/api/v2/pokemon/${searchString}/`;
//     ;
//     sendGetRequest(fullURL, function(responseData){
//         var pokemons = pokemons;
//         renderCharacters(pokemons)
//     })
// });      
// }
fetchPokemons() ;
// setUpEvents() ; 

