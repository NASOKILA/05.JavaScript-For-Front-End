

function renderSingleContinentInHTML(continent) {

    let continentName = continent['name'];

    let continentTitleH2 = $('<h2 class="continent-title"></h2>');
    continentTitleH2.text(continentName);
    continentTitleH2.appendTo($('.continent-data'));

    let countriesTitle = $('<h3 class="countries-title">Countries</h3>');
    countriesTitle.appendTo($('.continent-data'));

    let countriesDiv = $('<div class="countries"></div>');
    countriesDiv.appendTo($('.continent-data'));

    //select
    let select = $('<select class="dropdown-select"></select>');
    select.appendTo(countriesDiv);

    let option = $('<option disabled selected value> -- select an option -- </option>');
    option.appendTo(select);

    //Image
    let continentImageDiv = $('<div class="continent-image" ></div>');
    continentImageDiv.appendTo($('.continent-data'));

    let imageName = continentName.toLowerCase();
    let continentImg = $('<img src=" '+ 'images/' + imageName + '.png' + ' ">');
    continentImg.appendTo(continentImageDiv);

    //Countries
    let countries = continent['countries'];

    let countriesNames = [];
    for(let i in countries)
    {
        countriesNames.push(countries[i]['name']);
    }



    for(let name in countriesNames) {

        let countryName = countriesNames[name];

        let option = $('<option value=" '+ countryName +' ">'+ countryName +'</option>');
        option.appendTo(select);

        select.click(function () {

            let valueOfSelectedOption = $('select option:selected').filter(':selected').text();


            if(countryName === valueOfSelectedOption)
            {
                $.ajax({
                    url:'https://continental-drift.firebaseio.com/continents/'+ continentName +'/countries/'+ countryName +'.json',
                    success:function(res){

                        renderSingleCountryInHTML(res);
                    }
                });
            }
        });
    }
}

function renderSingleCountryInHTML(country)
{
    let continentCountry = $('.continent-country');

    $('.continent-country').empty();

    let countryTitle = $('<div class="country-title"></div>');
    countryTitle.append($('<h2>'+ country['name'] +'</h2>'));
    countryTitle.appendTo(continentCountry);

    let countryData = $('<div class="country-data"></div>');
    countryData.appendTo(continentCountry);

    let countryCapital = $('<div class="country-capital"><strong>Capital:</strong> <div>'+ country['capital'] +'</div></div>')
    countryCapital.appendTo(countryData);

    let officialLanguage = $('<div class="country-official-language"><strong>Official Language:</strong> <div>'+ country['officialLanguage'] +'</div></div>')
    officialLanguage.appendTo(countryData);

    let population = $('<div class="country-population"><strong>Population:</strong> <div>'+ country['population'] +'</div></div>')
    population.appendTo(countryData);

    let area = $('<div class="country-area"><strong>Area:</strong> <div>'+ country['area'] + " km" +' <sup>2</sup></div></div>');
    area.appendTo(countryData);

    let politicalStatus = $('<div class="country-political-status"><strong>Political Status:</strong> <div>'+ country['politicalStatus'] +'</div></div>')
    politicalStatus.appendTo(countryData);

    if(country['politicalStatus'] === "Republic")
    {
        let president = $('<div class="country-president"><strong>President:</strong> <div>'+ country['president'] +'</div></div>')
        president.appendTo(countryData);
    }
    else
    {
        let monarch = $('<div class="country-monarch"><strong>Monarch:</strong> <div>'+ country['monarch'] +'</div></div>')
        monarch.appendTo(countryData);
    }

    let officialCurrency = $('<div class="country-official-currency"><strong>Official Currency:</strong> <div>'+ country['officialCurrency'] +'</div></div>')
    officialCurrency.appendTo(countryData);
}

function attachEvents() {

    $.ajax({
        url:'https://continental-drift.firebaseio.com/continents.json',
        success: function(response){


            let continentsNames = [];
            let continents = response;

            for(let i in continents)
            {
                continentsNames.push(continents[i]['name']);
            }

            for (let index in continentsNames) {

                let continentName = continentsNames[index];

                let continentDiv = $('<div class="continent"></div>');
                continentDiv.appendTo($('.continents'));

                let continentTitle = $('<h5 class="continent-title">' + continentName + '</h5>');
                continentTitle.appendTo(continentDiv);

                continentDiv.click(function (response) {
                    response.preventDefault();

                    $('.continent-data').empty();

                    $('.continent-country').empty();

                    if($(this).hasClass("clicked"))
                    {
                        $('.continent-data').css("display","none");
                        $('.continent-country').css("display","none");

                        $(this).removeClass("clicked")
                    }
                    else
                    {  
                        $('.continent').removeClass("clicked");
                        $(this).addClass("clicked");

                        $('.continent-data').css("display","block");
                        $('.continent-country').css("display","block");
                    }

                    $.ajax({
                        url:'https://continental-drift.firebaseio.com/continents/'+ continentName +'.json',
                        success: function(r){
                           
                            renderSingleContinentInHTML(r);
                        }
                    });
                });
            }
        }
    });
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

attachEvents();
