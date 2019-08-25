var id= window.location.search.substring(4)

var url = "https://pokeapi.co/api/v2/pokemon/";
function renderPokemons(PokemonCard){
    
    var content = document.getElementById("content")
    content.textContent = ""
    var pokemonID = PokemonCard.id;
    // console.log(Pokemon)
    var pokemon_name = PokemonCard.forms[0].name;
    var pokemon_height = (((PokemonCard.height *0.328084)+0.001)*100/100).toFixed(1); 
    var pokemon_weight = (((PokemonCard.weight *0.220462)+0.001)*100/100).toFixed(2);
    var pokemontype = PokemonCard.types;
    var pokemonabi = PokemonCard.abilities;
    var imgSrc = 'https://img.pokemondb.net/artwork/'+pokemon_name+'.jpg'
    var pokemonHTML=`
    <div id='Card'>
        <img id="pokemonIMG" src=${imgSrc}>
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
//     var pokemonHTML=`
//     <div>
        
//             <img id="img" src="${imgSrc}">
        
//             <small id="PokemonID">#${pokemonID}</small>
//             <br>
//             <small id="PokemonName">${pokemon_name}</small>
//             <br>
 
//     </div>
    
//         `;
//         content.insertAdjacentHTML("beforeend", pokemonHTML);
    }
}
function fetchCharacter () {

    var pokemonURL = `${url}${id}`
    sendGetRequest(pokemonURL, function (responseData) {

            var PokemonCard = responseData;
            
            renderPokemons(PokemonCard)
        

    })
}

fetchCharacter()
