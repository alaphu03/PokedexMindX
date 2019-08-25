var id= window.location.search.substring(4)
console.log(id);

var url = "https://pokeapi.co/api/v2/pokedex/1/?offset=0&limit=20/${id}";

function renderPokemons(Pokemons){
//     console.log(Pokemons);
    
    var content = document.getElementById("dt_content")
    content.textContent = ""
    var pokemonID = Pokemons.entry_number;
    var pokemon_name = Pokemons.pokemon_species.name;
//     console.log(Pokemons.pokemon_species.url);
    
//     console.log(pokemon_name);
    
    var imgSrc = 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/'+pokemon_name+'.png';
    var pokemonHTML=`
    <div>
        
            <img id="img" src="${imgSrc}">
        
            <small id="PokemonID">#${pokemonID}</small>
            <br>
            <small id="PokemonName">${pokemon_name}</small>
            <br>
 
    </div>
    
        `;
        content.insertAdjacentHTML("beforeend", pokemonHTML);

}
function fetchCharacter () {

    var fullUrl = `${url}?${id}`

    //3. Send request, handle response data
    sendGetRequest(fullUrl, function (responseData) {

            var Pokemons = responseData.pokemon_entries[id-1];
            // console.log(Pokemons);
            
            renderPokemons(Pokemons)
        

    })
}

fetchCharacter()
// console.log("kjkljkl");