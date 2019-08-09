var url = "https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0";

function renderCharacters(pokemons){
    for (var i=0 ; i < pokemons; i++){
        pokemon = responseData.results[i].name;
        var pokemonIndex = i+1;
        var pokemonimg = "https://img.pokemondb.net/artwork/"+responseData.results[i].name+".jpg";
        var pokemonHTML=`
        <div>
            <h3>${pokemonIndex}</h3>
            <img src = ${pokemonimg}>
            <h2>${pokemon}</h2>
        </div>
        `
        var content = document.getElementById("content")
        content.insertAdjacentHTML("beforeend", pokemonHTML);
        };
};
function fetchPokemons() {
    sendGetRequest(url, function(responseData){
        var pokemons= responseData.results;
        renderCharacters(pokemons);
    })
}

// function setUpEvents() {
//     var btnSearch = document.getElementById("btn_search");
//     btnSearch.addEventListener("click", function(e){
//     var searchBar = document.getElementById("search_bar");
//     var searchString = searchBar.value;
//     var fullURL=`https://pokeapi.co/api/v2/pokemon/${searchString}/`;
//     ;
//     sendGetRequest(fullURL, function(responseData){
//         var pokemons = responseData.results;
//         renderCharacters(pokemons)
//     })
// });      
// }
fetchPokemons() ;
// setUpEvents() ; 

