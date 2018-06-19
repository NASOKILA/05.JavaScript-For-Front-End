

function renderDataInHTML(continents) {

    //Render continenrs
    for(let c in continents)
    {
        //Render each continent data
        let continent = continents[c];
        let continentName = continent['name'];

        let continentCountries = continent['countries'];


        //create the elements
        let continentDiv = $('<div class="continent"></div>')
            .append($('<h5 class="continent-title">'+ continentName +'</h5>'))
            .appendTo($('.continents'));

        $('.continent-data')
            .append($('<h2 class="continent-title">'+ continentName +'</h2>'))
            .append($('<h3 class="countries-title">Countries</h3>'));



        //Render countries


        for(let c in continentCountries)
        {
            //Render each country data
            let country = continentCountries[c];

            let name = country['name'];
            let capital = country['capital'];
            let officialLanguage = country['officialLanguage'];
            let population = country['population'];
            let area = country['area'];
            let politicalStatus = country['politicalStatus'];

            let president = "";
            let monarch = "";

            if(politicalStatus === "Republic")
                president = country["president"];
            else
                monarch = country['monarch'];

            let officialCurrency = country['officialCurrency'];



            //Create country elements

            let select = $('<select class="dropdown-select"></select>')
                .append($('<option disabled selected value> -- select an option -- </option>'))
                .append($('<option value="'+ name +'">'+ name +'</option>'))
                .appendTo($('.continent-data'));

            let continentImageDiv = $('<div class="continent-image"></div>')
                .append($('<img src="images/'+ continentName +'.png"/>'))
                .appendTo($('.continent-data'));



            //Country Data Elements

            let countryTitleDiv = $('<div class="country-title"></div>')
                .append($('<h2>'+ name +'</h2>'))
                .appendTo($('.continent-country'));

            let countryDataDiv = $('<div class="country-data"></div>')
                .appendTo($('.continent-country'));

            let countryCapitalDiv = $('<div class="country-capital"></div>')
                .append($('<strong>Capital:</strong>'))
                .append($('<div>'+ capital +'</div>'))
                .appendTo(countryDataDiv);

            let countryOficialLanguageDiv = $('<div class="country-official-language"></div>')
                .append($('<strong>Official Language:</strong>'))
                .append($('<div>'+ officialLanguage +'</div>'))
                .appendTo(countryDataDiv);

            let countryPopulationDiv = $('<div class="country-population"></div>')
                .append($('<strong>Population:</strong>'))
                .append($('<div>'+ population +'</div>'))
                .appendTo(countryDataDiv);

            let countryAreaDiv = $('<div class="country-area"></div>')
                .append($('<strong>Area:</strong>'))
                .append($('<div>'+ area +' km <sup>2</sup></div>'))
                .appendTo(countryDataDiv);

            let countryPoliticalStatus = $('<div class="country-political-status"></div>')
                .append($('<strong>Political Status:</strong>'))
                .append($('<div>'+ politicalStatus +'</div>'))
                .appendTo(countryDataDiv);

            if(politicalStatus === "Republic")
            {
                let countryPresidentDiv = $('<div class="country-president"></div>')
                    .append($('<strong>President:</strong>'))
                    .append($('<div>'+ president +'</div>'))
                    .appendTo(countryDataDiv);
            }
            else
            {
                let countryMonarchDiv = $('<div class="country-monarch"></div>')
                    .append($('<strong>Monarch:</strong>'))
                    .append($('<div>'+ monarch +'</div>'))
                    .appendTo(countryDataDiv);
            }

            let countryOfficialCurrency = $('<div class="country-official-currency"></div>')
                .append($('<strong>Official Currency:</strong>'))
                .append($('<div>'+ officialCurrency +'</div>'))
                .appendTo(countryDataDiv);

        }


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
                politicalStatus: "Monarch",
                president: "Rumen Radev",
                officialCurrency: "LEV(BGN)"
            }
        }
    }
};

renderDataInHTML(continents);








