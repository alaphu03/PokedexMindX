

var url = "https://pokeapi.co/api/v2/pokemon/1";

function renderPokemonStat(pokemon_stat) {
    for ( var i = 0 ; i< pokemon_stat.length; i++){
        // console.log("Congrats")
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
    };

    // var IDPokemon = pokemonsSearch.id
    // var content = document.getElementById("content");
    // content.textContent = ""
    // // var pokemonimg = "https://img.pokemondb.net/artwork/"+pokemonsSearch.name+".jpg";
    // var pokemonimg = "https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/"+pokemonID+".png?raw=true"
    // // var pokemonimg = "https://img.pokemondb.net/sprites/sun-moon/icon/"+pokemonName+".png"
    // var pokemonHTML=`
    // <div id="pokemonCard">
    //     <img id = cardIMG src = ${pokemonimg}>
    //     <div class= "container">
    //         <span>
    //             <h3 id="pokemonIndex">#${pokemonID}.</h3>
    //             <h2>${pokemonName}</h2>
    //         </span>
    //     </div>
    // </div>
    // `
    // content.insertAdjacentHTML("beforeend", pokemonHTML);
    ;
};
// function move(one) {
//     var elem = document.getElementById("myBar1"); 
//     var width = 10;
//     var id = setInterval(frame, 10);
//     function frame() {
//       if (width >= pokemon_stat_stat[1]) {
//         clearInterval(id);
//       } else {
//         width++; 
//         elem.style.width = width + '%'; 
//       }
//     }
// }

// function move(two) {
//     var elem = document.getElementById("myBar2"); 
//     var width = 10;
//     var id = setInterval(frame, 10);
//     function frame() {
//       if (width >= pokemon_stat_stat[2]) {
//         clearInterval(id);
//       } else {
//         width++; 
//         elem.style.width = width + '%'; 
//       }
//     }
// }

// function move(three) {
//     var elem = document.getElementById("myBar3"); 
//     var width = 10;
//     var id = setInterval(frame, 10);
//     function frame() {
//       if (width >= pokemon_stat_stat[3]) {
//         clearInterval(id);
//       } else {
//         width++; 
//         elem.style.width = width + '%'; 
//       }
//     }
// }

// function move(four) {
//     var elem = document.getElementById("myBar4"); 
//     var width = 10;
//     var id = setInterval(frame, 10);
//     function frame() {
//       if (width >= pokemon_stat_stat[4]) {
//         clearInterval(id);
//       } else {
//         width++; 
//         elem.style.width = width + '%'; 
//       }
//     }
// }

// function move(five) {
//     var elem = document.getElementById("myBar5"); 
//     var width = 10;
//     var id = setInterval(frame, 10);
//     function frame() {
//       if (width >= pokemon_stat_stat[5]) {
//         clearInterval(id);
//       } else {
//         width++; 
//         elem.style.width = width + '%'; 
//       }
//     }
// }

// function move(six) {
//     var elem = document.getElementById("myBar6"); 
//     var width = 10;
//     var id = setInterval(frame, 10);
//     function frame() {
//       if (width >= pokemon_stat_stat) {
//         clearInterval(id);
//       } else {
//         width++; 
//         elem.style.width = width + '%'; 
//       }
//     }
// }
function fetchPokemonsStat() {
    sendGetRequest(url, function(pokemonStat){
        var pokemon_stat= pokemonStat.stats;
        renderPokemonStat(pokemon_stat);
    });
};
fetchPokemonsStat() ; 