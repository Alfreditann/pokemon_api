const url = "https://pokeapi.co/api/v2/pokemon/ditto"
const get = (res => res.json())

fetch(url)
.then (get)
.then (data => document.getElementById("showPokemon").innerText = data.name)
.then (data => {const spriteUrl= data.sprites.front_default
    document.getElementById('pokemon-sprite').src = spriteUrl;

} )

