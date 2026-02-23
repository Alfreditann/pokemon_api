


async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        const respone = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if (!respone.ok) {
            throw new Error("could not fetch data")
        }
        const data = await respone.json();
        const pokemonSprite = data.sprites.front_default
        const imgElement = document.getElementById("pokemonSprite")

        imgElement.src = pokemonSprite
        imgElement.style.display = "block"


        try {
            let type2
            let type
            let pokemonType
            if (data.types[1].type.name) {
                type2 = data.types[1].type.name
                type = data.types[0].type.name
                pokemonType = document.getElementById("pokemonType").innerText = type;
                const pokemonType2 = document.getElementById("pokemonType2").innerText = type2;
                console.log(type)
                console.log(type2)
            }
            else{
                type = data.types[0].type.name
                pokemonType = document.getElementById("pokemonType").innerText = type;
                type2 = ""
                const pokemonType2 = document.getElementById("pokemonType2").innerText = type2;
                console.log(type)
            }

        }
        catch (error) {
            return(error)
        }


    }
    catch (error) {
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



