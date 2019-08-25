var url = "https://pokeapi.co/api/v2/pokemon/1/";
function renderPokemons(Pokemon) {
    var content = document.getElementsByClassName("content")[0]
    var pokemonID = Pokemon.id;
    // console.log(Pokemon)
    var pokemon_name = Pokemon.forms[0].name;
    var pokemon_height = (((Pokemon.height *0.328084)+0.001)*100/100).toFixed(1); 
    var pokemon_weight = (((Pokemon.weight *0.220462)+0.001)*100/100).toFixed(2);
    var pokemontype = Pokemon.types;
    var pokemonabi = Pokemon.abilities;
    // var imgSrc = 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/'+${pokemon_name}+'.png';
    var pokemonHTML=`
    <div id='Card'>
        <img id="pokemonIMG" src="https://img.pokemondb.net/artwork/bulbasaur.jpg">
        <h1 id="IDContainer">
            <div id="ID">#${pokemonID}.</div>
            <div id="name">${pokemon_name}</div>
            <br>
        </h1>
        <div id="Height">
            <div id="H">Height:</div>
            <div id="HH">${pokemon_height} ft</div>
        </div>
        <div id="Weight">
            <div id="W">Weight:</div>
            <div id="WW">${pokemon_weight} lbs</div>
        </div>
        <div id="T">Type:
        </div>
        <div id="A">Ability:
        </div>
    </div>
    `;
    content.insertAdjacentHTML("afterbegin", pokemonHTML);
    for (var type= 0; type< pokemontype.length; type++){
        var content2 =document.getElementById("T")
        var pokemonTYPE =pokemontype[type].type.name
        var typeHTML=`
        <div id="Type">${pokemonTYPE}</div>
        `
        content2.insertAdjacentHTML("beforeend", typeHTML)
    }
    for (var abi= 0; abi< pokemonabi.length; abi++){
        var content3 =document.getElementById("A")
        var pokemonABI =pokemonabi[abi].ability.name
        var abiHTML=`
        <div id="ABI">${pokemonABI}</div>
        `
        content3.insertAdjacentHTML("beforeend", abiHTML)
    }
}


  
function fetchPokemons(){
    var fullURL = `${url}`;
    sendGetRequest(fullURL, function(Pokemons) {
        var Pokemon = Pokemons
        // var pokemon_ID = Pokemon.id;
        // var pokemon_name = Pokemon.forms[0].name;
        // var pokemon_height = Pokemon.height; 
        // var pokemon_weight = Pokemon.weight;
        renderPokemons(Pokemon)
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

