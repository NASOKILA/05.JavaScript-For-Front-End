







function attachEvents()
{


    function renderSingleContinent(continentName) {


        let continentDiv = $('<div class="continent"></div>')
            .append($('<h5 class="continent-title">'+ continentName +'</h5>'))
            .appendTo($('.continents'));




        renderContinentData(continentName);
    }


    function renderContinentData(continentName)
    {

        //Attach event on continentTitle
        $('.continent-title').unbind('click').bind('click', function() {

            //Chistim si i dvete predi da pochnem da renderirame i suzdavame
            $('.continent-data').empty();
            $('.continent-country').empty();

            let continentClickedName = $(this)[0].innerHTML;

            $('.continent-data')
                .append($('<h2 class="continent-title">'+ continentClickedName +'</h2>'))
                .append($('<h3 class="countries-title">Countries</h3>'));

            if($(this).hasClass("clicked"))
            {
                $('.continent-data').css('display', 'none');
                $('.continent-country').css('display', 'none');

                $('.continent-title').removeClass("clicked");
            }
            else
            {
                $('.continent-title').removeClass("clicked");
                $(this).addClass("clicked");
                $('.continent-data').css('display', 'block');
                $('.continent-country').css('display', 'block');

            }


            //When continent is clicked get single continent
            $.ajax({
                url:'https://continental-drift.firebaseio.com/continents/'+ continentClickedName +'.json',
                success:function (continent) {

                    let select = $('<select class="dropdown-select"></select>')
                        .append($('<option disabled selected value> -- select an option -- </option>'))
                        .appendTo($('.continent-data'));

                    let continentImageDiv = $('<div class="continent-image"></div>')
                        .append($('<img src="images/'+ continentClickedName +'.png"/>'))
                        .appendTo($('.continent-data'));


                    //ONLY COUNTRY NAMES
                    
                    let countries = continent['countries'];
                    for (let c in countries)
                    {
                        let countryName = countries[c]['name'];
                        let option = $('<option value="'+ countryName +'">'+ countryName +'</option>');
                        option.appendTo(select);
                    }


                    //DROP DOWN MENU EVENT
                    select.click(function (e) {
                        e.preventDefault();
                        
                        //Take selected countryName
                        let selectedOptionCountry = $( ".dropdown-select option:selected" ).text();

                        //Check if it is deferent from the default one
                        if(selectedOptionCountry !== " -- select an option -- ")
                        {

                            //Load the data from the fire database
                            $.ajax({
                                url:'https://continental-drift.firebaseio.com/continents/'+ continentClickedName +'/countries/'+ selectedOptionCountry +'.json',
                                success:function (country) {

                                    //And pass it to the function to render it
                                    renderSingleCountry(country);
                                }
                        });
                            
                        
                        }

                    })

                }
            });

        });

    }

    function renderSingleCountry(country) {


        //chistim predi da renderirame
        $('.continent-country').empty();

        // render country data

        let name = country['name'];
        let capital = country['capital'];
        let officialLanguage = country['officialLanguage'];
        let population = country['population'];
        let area = country['area'];
        let politicalStatus = country['politicalStatus'];

        let president = "";
        let monarch = "";

        if (politicalStatus === "Republic")
            president = country["president"];
        else
            monarch = country['monarch'];

        let officialCurrency = country['officialCurrency'];


        //Country Data Elements

        let countryTitleDiv = $('<div class="country-title"></div>')
            .append($('<h2>' + name + '</h2>'))
            .appendTo($('.continent-country'));

        let countryDataDiv = $('<div class="country-data"></div>')
            .appendTo($('.continent-country'));

        let countryCapitalDiv = $('<div class="country-capital"></div>')
            .append($('<strong>Capital:</strong>'))
            .append($('<div>' + capital + '</div>'))
            .appendTo(countryDataDiv);

        let countryOficialLanguageDiv = $('<div class="country-official-language"></div>')
            .append($('<strong>Official Language:</strong>'))
            .append($('<div>' + officialLanguage + '</div>'))
            .appendTo(countryDataDiv);

        let countryPopulationDiv = $('<div class="country-population"></div>')
            .append($('<strong>Population:</strong>'))
            .append($('<div>' + population + '</div>'))
            .appendTo(countryDataDiv);

        let countryAreaDiv = $('<div class="country-area"></div>')
            .append($('<strong>Area:</strong>'))
            .append($('<div>' + area + ' km <sup>2</sup></div>'))
            .appendTo(countryDataDiv);

        let countryPoliticalStatus = $('<div class="country-political-status"></div>')
            .append($('<strong>Political Status:</strong>'))
            .append($('<div>' + politicalStatus + '</div>'))
            .appendTo(countryDataDiv);

        if (politicalStatus === "Republic") {
            let countryPresidentDiv = $('<div class="country-president"></div>')
                .append($('<strong>President:</strong>'))
                .append($('<div>' + president + '</div>'))
                .appendTo(countryDataDiv);
        }
        else {
            let countryMonarchDiv = $('<div class="country-monarch"></div>')
                .append($('<strong>Monarch:</strong>'))
                .append($('<div>' + monarch + '</div>'))
                .appendTo(countryDataDiv);
        }

        let countryOfficialCurrency = $('<div class="country-official-currency"></div>')
            .append($('<strong>Official Currency:</strong>'))
            .append($('<div>' + officialCurrency + '</div>'))
            .appendTo(countryDataDiv);


    }


    //get all continents and pass their names
    $.ajax({
        url:'https://continental-drift.firebaseio.com/continents.json',
        success:function(response){


            //pass only continentsNames
            for(let c in response)
            {
                let continentName = response[c]['name'];
                renderSingleContinent(continentName);
            }
        }

    });

}


attachEvents(); //pass the continents object
