
$('button').click(function () {
    attachEvents();
});

function attachEvents() {

    let locationName = $('.location-input').val();

    //“Lyulin”, “Dianabad”, “Mladost”.

    $.ajax({
        url:'https://pokemoncodex.firebaseio.com/locations/'+ locationName +'.json',
        success:function (response) {

            $('.result').empty();
            $('.result').css('display','block');

            if(response === null)
            {
                let errorDiv = $('<div class="error">Error loading location.</div>');
                errorDiv.appendTo($('.result'));
            }
            else
            {
                let locationName = response['name'];
                let latitude = response['latitude'];
                let longitude = response['longitude'];
                let pokemons = response['pokemons'];

                let locationDiv = $('<div class="location"></div>')
                    .append($('<h1 class="location-name">Location: '+ locationName +'</h1>'))
                    .appendTo($('.result'));

                let locationCoordinatesDiv = $('<div class="location-coordinates"></div>')
                    .append($('<h2 class="location-longitude">Longitude: '+ longitude +'</h2>'))
                    .append($('<h2 class="location-latitude">Latitude: '+ latitude +'</h2>'))
                    .appendTo(locationDiv);

                locationCoordinatesDiv.css('width','40%');

                let pokemonsDiv = $('<div class="pokemons"></div>')
                    .appendTo($('.result'));


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

                attackAccordonEvent();

                function attackAccordonEvent()
                {
                    $('.pokemon-title').click(function () {

                            var $this = $(this);

                            if ($this.next().hasClass('show')) {
                                $this.next().removeClass('show');
                                $this.next().slideUp(350);
                            } else {
                                $this.parent().parent().find('pokemon-stats').removeClass('show');
                                $this.parent().parent().find('pokemon-stats').slideUp(350);
                                $this.next().toggleClass('show');
                                $this.next().slideToggle(350);
                            }

                    })
                }

            }

        }
    });

    $('.location-input').val('');
}













