//buscar los datos del pokemon con numero o el nombre
function buscarpokemon(ContenedorNumero){
    let inputId = ' pokemoniniput${ContenedorNumero}'; 
    let nombrepokemon = document.getElementById(inputId)-value.trim().toLoweCase();
    let urlApi = 'https://pokeapi.co/api/v2/pokemon/${nombrepokemon}'

    fetch(urlApi)
    .then(Response => Response.json())
    .then(datospokemon => mostrarpokemon(datospokemon, ContenedorNumero))
    .catch(() => mostrarerror(ContenedorNumero))

}
//mostrar la info del pokemon 

function mostrarpokemon(datospokemon, ContenedorNumero){
    let infoDivid = ' pokemoninfo${ContenedorNumero}'; 
    let infoDiv = document.getElementById(infoDivid);

    infoDiv.innerHTML = '
    <h2 class="pk-name" >${datospokemon.name.toUpperCase()}</h2>
    <img class="pk-img" src="${datospokemon.sprites.other["official-artwork"].front_default}">
    <p>Numero:${datospokemon.id}</p>
    <p>weight:${datospokemon.weight/10}kg</p>
    <p>height:${datospokemon.height}m</p>
    '
}
//error en busqueda de pokemon xddddddd
function mostrarerror(ContenedorNumero){
    let infoDivid = ' pokemoninfo${ContenedorNumero}'; 
    let infoDiv = document.getElementById(infoDivid);
    infoDivid.innerHTML = '

    <p class="pk-ms">pokemon no encontrado. <br> intenta con otro nombre o numero</p>
    
    '
}
