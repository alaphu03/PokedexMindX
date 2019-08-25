var url = "https://pokeapi.co/api/v2/pokedex/1/?offset=0&limit=20";
var url1 = "https://pokeapi.co/api/v2/pokemon/"+id+"/";
var url2 = "https://pokeapi.co/api/v2/pokemon-species/"+id+"/";
function openDetail() {
    var character_div = document.getElementsByClassName("PokemonCard")
    for (i=0;i<character_div.length;i++) {
        var character = character_div[i]
        character.addEventListener("click",function (e) {
            var div_clicked = e.target.parentNode
            var id = div_clicked.id 
            window.open(`detail.html?id=${id}`,"_self")         
        }) 
    }
}
function renderPokemons(Pokemons) {
    // var content = document.getElementById("content")
    // content.textContent=""
    // for (var i = 0; i <Pokemons.length; i++){
    //     var Pokemon = Pokemons[i];
    //     var pokemonID = Pokemon.entry_number;
    //     var pokemon_name = Pokemon.pokemon_species.name;
    //     var imgSrc = 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/'+pokemon_name+'.png';
    //     var pokemonHTML=`
    //     <div id="${pokemonID}" class="PokemonCard">
          
    //                 <img id="img" src="${imgSrc}">
               
    //                 <small id="PokemonID">#${pokemonID}</small>
    //                 <br>
    //                 <small id="PokemonName">${pokemon_name}</small>
    //                 <br>
     
    //     </div>
        
    //         `;
    //         content.insertAdjacentHTML("beforeend", pokemonHTML);

        // }
        openDetail()
    }


console.log(IDPokemon)
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
            var pokemonDesToUse = pokDes[x].flavor_text
            pokemonDesList.push(pokemonDesToUse)
        }
    }
    var arr = []
    for (var y = 0; y<pokemonDesList.length; y++){
        if(!arr.includes(pokemonDesList[y])&&checkS(arr,pokemonDesList[y])){
            arr.push(pokemonDesList[y])
        } 
    }
    for (var z=0; z<arr.length; z++){
        DesString += arr[z]
    }
    pokemonDesHTML =`<h1>Description</h1><br><div class="Description">${DesString}</div>`
    content.insertAdjacentHTML("afterbegin", pokemonDesHTML);
    }



function renderPokemonStat(pokemon_stat) {
    for ( var i = 0 ; i< pokemon_stat.length; i++){
        var pokemon_STAT = pokemon_stat[i]
        var stat = pokemon_STAT.base_stat
        var name = pokemon_STAT.stat.name;
        console.log(name)
        console.log(stat)
        var iii = i+1
        var ii = iii.toString();
        var myBarr = "myBar" +ii
        var elem = document.getElementById(myBarr); 
        var width = 10;
        var stats = stat /1
        for ( var y = 0; y <stats; y++){
            width++; 
            elem.style.width = width + '%'; 
        }
    }
function fetchPokemons(){
    var fullURL4 = `${url1}`;
    sendGetRequest(fullURL4, function(Pokemonss) {
        var Pokemons = Pokemonss.pokemon_entries;
        // console.log(Pokemons);
        renderPokemons(Pokemons)
    });
}    
function fetchPokemonsStat() {
    var fullURL1 = `${url1}`;
    sendGetRequest(fullURL1, function(pokemonStat){
        var pokemon_stat= pokemonStat.stats;
        renderPokemonStat(pokemon_stat);
    });
};
function fetchPokemonsID(){
    var fullURL2 = `${url2}`;
    sendGetRequest(fullURL2, function(Pokemons) {
        var Pokemon = Pokemons
        renderPokemons(Pokemon)
    });
}
  
function fetchPokemonsDes(){
    var fullURL3 = `${url2}`;
    sendGetRequest(fullURL3, function(PokemonsDes) {
        var Pokemon_des = PokemonsDes
        renderPokemonsDes(Pokemon_des)
    });
}
fetchPokemonsDes();
fetchPokemonsID();
fetchPokemons();
fetchPokemonsStat() ; 


