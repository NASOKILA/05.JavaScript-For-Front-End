
function renderDataInHTML(location) {

    let locationName = location['name'];
    let longitude = location['longitude'];
    let latitude = location['latitude'];

    let container = $('<div class="container"></div>');
    $('body').append(container);

    let resultDiv = $('<div class="result"></div>');
    resultDiv.appendTo(container);

    let locationDiv = $('<div class="location"></div>')
        .append($('<h1 class="location-name">Location: '+ locationName +'</h1>'))
        .appendTo(resultDiv);

    let locationCoordinatesDiv = $('<div class="location-coordinates"></div>')
        .append($('<h2 class="location-longitude">Longitude: '+ longitude +'</h2>'))
        .append($('<h2 class="location-latitude">Latitude: '+ latitude +'</h2>'))
        .appendTo(locationDiv);

    locationCoordinatesDiv.css('width','40%');

    let pokemonsDiv = $('<div class="pokemons"></div>')
        .appendTo(resultDiv);

    let pokemons = location['pokemons'];

    for(let p in pokemons)
    {
        let pokemon = pokemons[p];

        let pokemonTitle = pokemon['name'];
        let pokemonPower = pokemon['power'];
        let pokemonEvolvedFrom = pokemon['evolvedFrom'];
        let pokemonEvolvedTo = pokemon['evolvesTo'];

        let pokemonDiv = $('<div class="pokemon"></div>')
            .append($('<div class="pokemon-title">'+ pokemonTitle +'</div>'));

        pokemonDiv.appendTo(pokemonsDiv);

    let pokemonStatsDiv = $('<div class="pokemon-stats"></div>')
        .append($('<div class="pokemon-name">Name: '+ pokemonTitle +'</div>'))
        .append($('<div class="pokemon-power">Power: '+ pokemonPower +'pp</div>'))
        .append($('<div class="pokemon-evolved-from">Evolved From: '+ pokemonEvolvedFrom +'</div>'))
        .append($('<div class="pokemon-evolves-to">Evolves To: '+ pokemonEvolvedTo +'</div>'))
        .appendTo(pokemonDiv);

    }

}

let location2 = {
    name: 'Dianabad',
    longitude: '95.242',
    latitude: '94.123',
    pokemons: {
        0: {
            name: 'Pikachu',
            power: 2000,
            evolvedFrom: 'none',
            evolvesTo: 'Raichu'
        },
        1: {
            name: 'Bulbasaur',
            power: 1000,
            evolvedFrom: 'Something',
            evolvesTo: 'Something else'
        }
    }
};
renderDataInHTML(location2);


