


async function fetchData(){
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        const respone = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if (!respone.ok){
            throw new Error("could not fetch data")
        }
        const data = await respone.json();
        const pokemonSprite = data.sprites.front_default
        const imgElement = document.getElementById("pokemonSprite")

        imgElement.src = pokemonSprite
        imgElement.style.display = "block"
        const Type = data.types.map(t => t.type.name)
        const pokemonType = document.getElementById("pokemonType")
        pokemonType.text = Type 
    }
    catch(error){
        console.error(error)
    }
}


// fetch(url)
//     .then(respone => {
//         if (!respone.ok){
//             throw new Error("Pokemon does not exist")
//         }
//         return respone.json()
//     })
//     .then(data => console.log(data.name))
//     .catch(error => console.error(error))
// .then (data => document.getElementById("showPokemon").innerText = data.name
// ,document.getElementById('pokemon-sprite').src = data.sprites.front_default)



