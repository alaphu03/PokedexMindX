// var url = "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0";

// function renderPokemons(pokemons) {
//     for (var i=0 ; i < pokemons.length ; i++){
//         var pokemonName = pokemons[i].name;
//         var content = document.getElementById("content");
//         var pokemonIndex = i+1;
//         // var pokemonimg = "https://img.pokemondb.net/artwork/"+pokemons[i].name+".jpg";
//         var pokemonimg = "https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/"+pokemonIndex+".png?raw=true"
//         // var pokemonimg = "https://img.pokemondb.net/sprites/sun-moon/icon/"+pokemonName+".png"
//         var pokemonHTML=`
//         <div id="pokemonCard">
//             <img id = pokemonIMG src = ${pokemonimg}>
//             <div class= "container">
//                 <h3 id="pokemonIndex">#${pokemonIndex}.</h3>
//                 <h2 id="pokemonName">${pokemonName}</h2>
//             </div>
//         </div>
//         `
//         content.insertAdjacentHTML("beforeend", pokemonHTML);
//     };
// };
// function fetchPokemons() {
//     sendGetRequest(url, function(pokemons){
//         var pokemons= pokemons.results;
//         renderPokemons(pokemons);
//     });
// };

// function setUpEvents() {
//     var btnSearch = document.getElementById("btn_search");
//     btnSearch.addEventListener("click", function(e){
//     var searchBar = document.getElementById("search_bar");
//     var searchString = searchBar.value.toLowerCase();
//     var url=`https://pokeapi.co/api/v2/pokemon/${searchString}`;
//     ;
//     sendGetRequest(url, function(pokemonsSearch){
//         var pokemonsSearch= pokemonsSearch;
//         renderPokemon(pokemonsSearch);
//         setUpEvents2();
//     })
// });      
// }
// function renderPokemon(pokemonsSearch) {
//     var pokemonName = pokemonsSearch.forms[0].name;
//     var pokemonID = pokemonsSearch.id
//     var content = document.getElementById("content");
//     content.textContent = ""
//     // var pokemonimg = "https://img.pokemondb.net/artwork/"+pokemonsSearch.name+".jpg";
//     var pokemonimg = "https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/"+pokemonID+".png?raw=true"
//     // var pokemonimg = "https://img.pokemondb.net/sprites/sun-moon/icon/"+pokemonName+".png"
//     var pokemonHTML=`
//     <div id="pokemonCard">
//         <img id = cardIMG src = ${pokemonimg}>
//         <div class= "container">
//             <span>
//                 <h3 id="pokemonIndex">#${pokemonID}.</h3>
//                 <h2>${pokemonName}</h2>
//             </span>
//         </div>
//     </div>
//     `
//     content.insertAdjacentHTML("beforeend", pokemonHTML);
//     ;
// };
// function setUpEvents2() {
//     var search = document.getElementById('content')
//     var search2 = search.parentNode;
//     search2.addEventListener("click", function(e){
//         var url=`https://pokeapi.co/api/v2/pokemon/charizard`;
//         ;
//         sendGetRequest(url, function(pokemonsSearchs){
//             var pokemonName = pokemonsSearchs.forms[0].name;
//             var pokemonID = pokemonsSearchs.id
//             // var pokemonimg = "https://img.pokemondb.net/artwork/"+pokemonsSearchs.name+".jpg";
//             var pokemonimg = "https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/"+pokemonID+".png?raw=true"
//             // var pokemonimg = "https://img.pokemondb.net/sprites/sun-moon/icon/"+pokemonName+".png"
//             var pokemonHTML=`
//             <div id="pokemonCard">
//                 <img id = cardIMG src = ${pokemonimg}>
//                 <div class= "container">
//                     <span>
//                         <h3 id="pokemonIndex">#${pokemonID}.</h3>
//                         <h2>${pokemonName}</h2>
//                     </span>
//                 </div>
//             </div>
//             `
//             var myWindow = window.open("#", 'self');
//             myWindow.document.writeln(pokemonHTML)
//         })
// });      
// }

// fetchPokemons() ;
// setUpEvents() ; 
// setUpEvents2();

