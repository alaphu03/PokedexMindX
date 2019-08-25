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
var url = "https://pokeapi.co/api/v2/pokemon-species/1/";
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
    pokemonDesHTML =`<h1>Description</h1><br><div class="Description">${DesString}</div>`
    // console.log(pokemonDesHTML)
    content.insertAdjacentHTML("afterbegin", pokemonDesHTML);
}


  
function fetchPokemonsDes(){
    var fullURL = `${url}`;
    sendGetRequest(fullURL, function(PokemonsDes) {
        var Pokemon_des = PokemonsDes
        renderPokemonsDes(Pokemon_des)
    });
}

// function setUpEvents() {
//     var btnSearch = document.getElementByIDPokemon("btn_search");
//     btnSearch.addEventListener("click", function(e){
//     var searchBar = document.getElementByIDPokemon("search_bar");
//     var searchString = searchBar.value;
//     var key = marvelKey(privateKey, publicKey);
//     var fullURL=`${url}?${key}&nameStartsWith=${searchString}`;
//     sendGetRequest(fullURL, function(responseData){
//         var Pokemons = responseData.data.results;
//         renderPokemons(Pokemons)
//     })
// });      
// }

fetchPokemonsDes();
// setUpEvents();

