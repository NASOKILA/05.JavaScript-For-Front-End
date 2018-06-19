

function renderAllContinents(continents)
{
    for(let c in continents)
    {
        let continentName = continents[c]['name'];
        console.log(continentName);
    }
}

function renderSingleContinent(continent)
{
    console.log(continent['name']);
    console.log('Countries:');

    let countries = continent['countries'];

    for(let c in countries)
    {
        console.log("$$$" + countries[c]['name'])
    }
}

function renderSingleCountry(country)
{

    console.log(country['name']);
    console.log("Capital: " + country['capital']);
    console.log("Official Language: " + country['officialLanguage']);
    console.log("Population: " + country['population']);
    console.log("Area: " + country['area'] + " km2");
    console.log("Political Status: " + country['politicalStatus']);

    if(country['politicalStatus'] === "Republic")
        console.log("President: " + country['president']);
    else
        console.log("Monarch: " + country['monarch']);

    console.log("Official Currency: " + country['officialCurrency']);

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

renderAllContinents(continents);
renderSingleContinent(continents['Europe']);
renderSingleCountry(continents['Europe']['countries']['Bulgaria']);





