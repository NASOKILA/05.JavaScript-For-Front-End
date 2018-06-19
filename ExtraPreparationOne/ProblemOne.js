





function renderData(location)
{
    let locationName = location['name'];
    let longitude = location['longitude'];
    let latitude = location['latitude'];

    let pokemons = location['pokemons'];

    console.log("Location: " + locationName);
    console.log("Longitude: " + longitude + " " + "Latitude: " + latitude);

    console.log("Pokemons:");
    for(let p in pokemons)
    {
        let pokemon = pokemons[p];

        console.log("###Name: " + pokemon['name']);
        console.log("###Power: " + pokemon['power'] + "pp");
        console.log("###Evolved From: " + pokemon['evolvedFrom']);
        console.log("###Evolves To: " + pokemon['evolvesTo']);
    }
}




let location = {
    name: 'Izgrev',
    longitude: '95.243',
    latitude: '94.231',
    pokemons: {
        0: {
            name: 'Pikachu',
            power: 2000,
            evolvedFrom: 'none',
            evolvesTo: 'Raichu'
        },
        1: {
            name: 'Wartortle',
            power: 500,
            evolvedFrom: 'Squirtle',
            evolvesTo: 'Blastoise'
        },
        2: {
            name: 'CherryBerry',
            power: 9999,
            evolvedFrom: 'Cherry',
            evolvesTo: 'Berry'
        }
    }
};

renderData(location);













