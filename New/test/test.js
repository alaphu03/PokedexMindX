var url = "https://pokeapi.co/api/v2/pokemon/bulbasaur/";
var url2 = "https://pokeapi.co/api/v2/pokemon-species/1/"
function renderPokemons(Pokemon) {
    var Card = document.getElementById("Card")

    var pokemonID = Pokemon.id;
    var pokemon_name = Pokemon.forms[0].name;
    var pokemonType = Pokemon.types
    var pokemonHeight = Pokemon.height;
    var pokemonWeight = Pokemon.weight;
    var pokemonHTML=`
    <div>${pokemonID}</div>
    <div>${pokemon_name}</div>
    <div>${pokemonHeight}</div>
    <div>${pokemonWeight}</div>
    `;
    for (var i =0; i< pokemonType.length; i++){
        pokemon_type = pokemonType[i].type.name
        pokemonHTMlL = `<div>${pokemon_type}</div>`
        Card.insertAdjacentHTML("beforeend", pokemonHTMlL);
    }

    Card.insertAdjacentHTML("beforeend", pokemonHTML);

    }
function renderPokemons2(Pokemon2) {
    var Card2 = document.getElementById("Card")
    var pokemonEggs = Pokemon2.egg_groups
    var pokemonD = Pokemon2.flavor_text_entries[53];
    var pokemonHTML=`
    <div>${pokemonD}</div>
    `;
    for (var i =0; i< pokemonEggs.length; i++){
        pokemonEggs = pokemonEggs[i].name
        pokemonHTMlL = `<div>${pokemonEggs}</div>`
        Card2.insertAdjacentHTML("beforeend", pokemonHTMlL);
    }

    Card2.insertAdjacentHTML("beforeend", pokemonHTML);

    }

function fetchPokemons2(){
    var fullURL = `${url2}`;
    sendGetRequest(fullURL, function(Pokemonss2) {
        var Pokemon2 = Pokemonss2;
        renderPokemons2(Pokemon2)
    });
}
  
function fetchPokemons(){
    var fullURL = `${url}`;
    sendGetRequest(fullURL, function(Pokemonss) {
        var Pokemon = Pokemonss;
        renderPokemons(Pokemon)
    });
}


fetchPokemons();



