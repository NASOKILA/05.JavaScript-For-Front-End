
$('button').click(function (e) {
    e.preventDefault();

    $('.result').empty();

    let locationName = $('.location-input').val();
    $('.result').css('display', 'block');

    if(locationName === "")
        return;

    $.ajax('https://pokemoncodex.firebaseio.com/locations/'+ locationName +'.json',{

        type:'GET',
        success:function(response){
            //“Lyulin”, “Dianabad”, “Mladost”.

            if(response === null)
            {
                let errorDiv = $('<div class="error">Error loading location.</div>');
                $('.result').append(errorDiv);

                $('.location-input').val('');
                return;
            }

            renderDataInHTML(response);

            $('.location-input').val('');
        }
    });

});

//“Lyulin”, “Dianabad”, “Mladost”

function renderDataInHTML(args) {

    let container = $('<div class="container"></div>');

    let result = $('<div class="result2"></div>');

    let location = $('<div class="location"></div>');

    let locationName = $('<h1 class="location-name">Location: ' + args['name'] + '</h1>');
    locationName.appendTo(location);

    let locationCoordinates = $('<div class="location-coordinates"></div>');

    let locationLongitude = $('<h3 class="location-longitude">Longitude: ' + args['longitude'] + '</h3>');

    let locationLatitude = $('<h3 class="location-latitude">Latitude: ' + args['latitude'] + '</h3>');

    locationCoordinates.append(locationLongitude);
    locationCoordinates.append(locationLatitude);
    locationCoordinates.css('width','45%');
    locationCoordinates.css('padding-bottom','1em');

    location.append(locationName);
    location.append(locationCoordinates);

    result.append(location);

    container.append(result);
    $('.result').append(container);

    if(!args.pokemons)
        return;

    for(let i in args.pokemons) {

        let pokemons = $('<div class="pokemons"></div>');
        pokemons.css('padding-top','0');
        pokemons.appendTo(result);

        let pokemon = $('<div class="pokemon"></div>');
        pokemon.appendTo(pokemons);

        let pokemonTitle = $('<div class="pokemon-title"></div>');
        pokemonTitle.text(args.pokemons[i].name);
        pokemonTitle.appendTo(pokemon);

        let pokemonStats = $('<div class="pokemon-stats">');
        pokemonStats.css('font-size', '1.00em');
        pokemonStats.appendTo(pokemon);

        let pokemonName = $('<div class="pokemon-name">');
        pokemonName.text('Name: ' + args.pokemons[i].name);
        pokemonName.css('margin-top','10px');
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

    $('.pokemon-title').hover(function(){
        $('.pokemon-title').css('cursor', 'default');
    });

    $('.pokemon').click(function(){

        let thisPokemon = $(this)[0];
        let thisPokemonStats = $('.pokemon-stats', thisPokemon)[0];

        if( $(thisPokemonStats).css('display') === 'none')
            $(thisPokemonStats).css('display', 'block');
        else
            $(thisPokemonStats).css('display', 'none');
    });
}
