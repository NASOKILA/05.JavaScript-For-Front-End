




function attachEvents(continents)
{

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

    function renderContinentData(continent)
    {
        let continentName = continent['name'];

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

            let countries = continents[continentClickedName]['countries'];


            let select = $('<select class="dropdown-select"></select>')
                .append($('<option disabled selected value> -- select an option -- </option>'))
                .appendTo($('.continent-data'));

            let continentImageDiv = $('<div class="continent-image"></div>')
                .append($('<img src="images/'+ continentClickedName +'.png"/>'))
                .appendTo($('.continent-data'));


            //Dobavqme si durjavite kato optioni v selekta:
            for (let cc in countries)
            {
                let countryName = countries[cc]['name'];
                let option = $('<option value="'+ countryName +'">'+ countryName +'</option>')
                option.appendTo(select);
            }


            select.click(function (e) {
                e.preventDefault();

                //Take selected country
                let selectedOption = $( ".dropdown-select option:selected" ).text();

                //Check if it is deferent from the default one
                if(selectedOption !== " -- select an option -- ")
                {
                    //And pass it to the function to render it
                    renderSingleCountry(countries[selectedOption]);
                }

            })


        });

    }

    function renderSingleContinent(continent) {

        let continentCountries = continent['countries'];

        //create the elements
        let continentDiv = $('<div class="continent"></div>')
            .append($('<h5 class="continent-title">'+ continent['name'] +'</h5>'))
            .appendTo($('.continents'));


        renderContinentData(continent);
    }


    for(let c in continents)
    {
        let continent = continents[c];
        renderSingleContinent(continent);
    }
}


let continents = {
    Europe: {
        name: "Europe",
        countries: {
            Bulgaria: {
                name: "Bulgaria",
                capital: "Sofia",
                officialLanguage: "Bulgarian",
                population: 7000000,
                area: 111000,
                politicalStatus: "Republic",
                president: "Rumen Radev",
                officialCurrency: "LEV(BGN)"
            },
            Vatican: {
                name: "Vatican",
                capital: "Vatican City",
                officialLanguage: "Italian",
                population: 1000,
                area: 0.44,
                politicalStatus: "Monarchy",
                monarch: "Francis",
                officialCurrency: "Euro(EUR)"
            }
        }
    },
    Asia: {
        name: "Asia",
        countries: {
            Russia: {
                name: "Russia",
                capital: "Moscow",
                officialLanguage: "Russian",
                population: 144463451,
                area: 17075200,
                politicalStatus: "Republic",
                president: "Vladimir Putin",
                officialCurrency: "Russian ruble(RUB)"
            },
            China: {
                name: "China",
                capital: "Beijing",
                officialLanguage: "Chinese",
                population: 1403500365,
                area: 9596961,
                politicalStatus: "Republic",
                president: "Xi Jinping",
                officialCurrency: "Renminbi(CNY)"
            }
        }
    }
};

attachEvents(continents); //pass the continents object
