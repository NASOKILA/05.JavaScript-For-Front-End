


function renderDataInHTML(args) {

    let container = $('<div class="container"></div>');

    let result = $('<div class="result"></div>');

    let location = $('<div class="location"></div>');

    let locationName = $('<h1 class="location-name">Location: ' + args['name'] + '</h1>');
    locationName.appendTo(location);

    let locationCoordinates = $('<div class="location-coordinates"></div>');

    let locationLongitude = $('<h2 class="location-longitude">Longitude: ' + args['longitude'] + '</h2>');

    let locationLatitude = $('<h2 class="location-latitude">Latitude: ' + args['latitude'] + '</h2>');

    locationCoordinates.append(locationLongitude);
    locationCoordinates.append(locationLatitude);

    location.append(locationName);
    location.append(locationCoordinates);

    result.append(location);

    container.append(result);
    $('body').append(container);

    //Pokemons:

    //Ako nqma pokemoni spirame do tuk
    if(!args.pokemons)
        return;

    for(let i in args.pokemons) {

        let pokemons = $('<div class="pokemons"></div>');
        pokemons.appendTo(result);

        let pokemon = $('<div class="pokemon"></div>');
        pokemon.appendTo(pokemons);

        let pokemonTitle = $('<div class="pokemon-title"></div>');
        pokemonTitle.text(args.pokemons[i].name);
        pokemonTitle.appendTo(pokemon);

        let pokemonStats = $('<div class="pokemon-stats">');
        //pokemonStats.css('display', 'block');
        pokemonStats.appendTo(pokemon);

        let pokemonName = $('<div class="pokemon-name">');
        pokemonName.text('Name: ' + args.pokemons[i].name);
        pokemonName.appendTo(pokemonStats);

        let pokemonPower = $('<div class="pokemon-power">');
        pokemonPower.text('Power: ' + args.pokemons[i].power + 'pp');
        pokemonPower.appendTo(pokemonStats);

        let pokemonevolvedFrom = $('<div class="pokemon-evolved-from">');
        pokemonevolvedFrom.text('Evolved From: ' + args.pokemons[i].evolvedFrom);
        pokemonevolvedFrom.appendTo(pokemonStats);

        let pokemonevolvedTo = $('<div class="pokemon-evolved-from">');
        pokemonevolvedTo.text('Evolved To: ' + args.pokemons[i].evolvesTo);
        pokemonevolvedTo.appendTo(pokemonStats);

    }

}

let Location = {
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

let Loaction2 = {
    name:'Izgrev',
    longitude:'95.243',
    latitude:'94.231',
    pokemons:
        {
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

renderDataInHTML(Loaction);

