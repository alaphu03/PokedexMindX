var id= window.location.search.substring(4)

var url = "https://pokeapi.co/api/v2/pokemon/";
var url2 = "https://pokeapi.co/api/v2/pokemon-species/";
var url3 = "https://pokeapi.co/api/v2/pokemon/";
function renderPokemonsInfor(PokemonCard){
    
    var content = document.getElementsByClassName("content")[0]
    var pokemonID = PokemonCard.id;
    // console.log(Pokemon)
    var pokemon_name = PokemonCard.forms[0].name;
    console.log(PokemonCard);
    var pokemon_height = (((PokemonCard.height *0.328084)+0.001)*100/100).toFixed(1); 
    var pokemon_weight = (((PokemonCard.weight *0.220462)+0.001)*100/100).toFixed(2);
    var pokemontype = PokemonCard.types;
    var pokemonabi = PokemonCard.abilities;
    var imgSrc = 'https://img.pokemondb.net/artwork/'+pokemon_name+'.jpg'
    var pokemonHTML=`
    <div id='Card'>
        <div class='imgIDContent'>
            <img id="pokemonIMG" src=${imgSrc}>
            <h1 id="IDContainer">
                <img class='pokeballIcon' src='data:image/png;base64,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'>
                <div id="ID">#${pokemonID}.</div>
                <div id="name">${pokemon_name}</div>
                <br>
            </h1>
        </div>
        <div class='ortherContent'>
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
            <br>
            <div id="A">Ability:
            </div>
        </div>
    </div>
    `;
    content.insertAdjacentHTML("afterbegin", pokemonHTML);
    for (var type= 0; type< pokemontype.length; type++){
        var content2 =document.getElementById("T")
        var pokemonTYPE = pokemontype[type].type.name
        var typeHTML=`
        <div class='${pokemonTYPE}'>${pokemonTYPE}</div>
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
function checkS(ar, astr){
    if(ar.length==0){
        return true
    }else{
        var a = true
        for(var i = 0; i < ar.length; i++){
            if(astr.substring(0,10).toLowerCase()==ar[i].substring(0,10).toLowerCase()){
                a = false
            }
        }
        return a
    }
}
function renderPokemonsDes(Pokemon_des) {
    var content = document.getElementsByClassName("content")[0]
    var pokDes = Pokemon_des.flavor_text_entries
    var pokemonDesList = [];
    var DesString = '';
    var pokemonDesHTML=`
    <div class="Description">
    </div>
    `
    for(var x=0; x<pokDes.length; x++){
        var pokDesToUse = pokDes[x].language.name
        if (pokDesToUse =='en'){
            // console.log('1')
            var pokemonDesToUse = pokDes[x].flavor_text
            pokemonDesList.push(pokemonDesToUse)
        }
    }

    // var pokDesToUse = Pokemon_des.flavor_text_entries[ii].flavor_text
    // console.log(pokemonDesList)
    var arr = []
    for (var y = 0; y<pokemonDesList.length; y++){
        if(!arr.includes(pokemonDesList[y])&&checkS(arr,pokemonDesList[y])){
            arr.push(pokemonDesList[y])
        } 
    }
    for (var z=0; z<arr.length; z++){
        DesString += arr[z]
        // pokemonDesHTML += `<div IDPokemon='pokemonLD'>${arr[z]}</div>`
    }
    // console.log(arr)
    pokemonDesHTML =`<div class="Description"><h1 class='DEs'>Description
    </h1><br>${DesString}
    <br>
    <br>
    <h1 class="StatContainer" >Pokemon's Stats</h1>
    <div class="statBar">
        <div class="statBar1">HP</div>
        <div class="statBar2">Attack</div>
        <div class="statBar3">Defense</div>
        <div class="statBar4">Sp.Atk</div>
        <div class="statBar5">Sp.Def</div>
        <div class="statBar6">Speed</div>
    </div>
    <h2 class='footer' >Data from PokeAPI.co</h2>
    `
    // console.log(pokemonDesHTML)
    content.insertAdjacentHTML("afterbegin", pokemonDesHTML);
}
function renderPokemonStat(pokemon_stat) {
    for ( var statCount = 0 ; statCount< pokemon_stat.length; statCount++){
        // console.log("Congrats")
        var pokemon_STAT = pokemon_stat[statCount]
        var stat = pokemon_STAT.base_stat
        var name = pokemon_STAT.stat.name;
        console.log(name)
        console.log(stat)
        var realStatCount = statCount+1;
        var statClass= "statBar" + realStatCount.toString()
        console.log(statClass)
        var Statcontent = document.getElementsByClassName(statClass)[0]
        statHTML = `
        <div class="Stats">${stat}</div>
        `
        Statcontent.insertAdjacentHTML("beforeend", statHTML)
    }
}   
 
function fetchCharacter () {

    var pokemonURL = `${url}${id}`
    sendGetRequest(pokemonURL, function (responseData) {

            var PokemonCard = responseData;
            var pokemon_stat= responseData.stats;
            renderPokemonsInfor(PokemonCard)  
            renderPokemonStat(pokemon_stat); 
    })
}
function fetchPokemonsDes(){
    var desURL = `${url2}${id}`;
    sendGetRequest(desURL, function(PokemonsDes) {
        var Pokemon_des = PokemonsDes
        renderPokemonsDes(Pokemon_des)
    });
}
fetchCharacter();
fetchPokemonsDes();
// fetchPokemonsStat();
