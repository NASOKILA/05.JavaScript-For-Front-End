
function renderAllContinents(args)
{
    for(let a in args)
    {
        console.log(args[a]['name']);
    }
}


function renderSingleContinent(args)
{
    let continentName = args['name'];
    let continentsCountries = args['countries'];

    console.log(continentName);

    console.log('Countries:');
    for(let index in continentsCountries)
    {
        console.log('$$$' + continentsCountries[index]['name']);
    }
}


function renderSingleCountry(args)
{

    console.log(args.name);
    console.log('Capital: ' + args.capital);
    console.log('Official Language: ' + args.officialLanguage);
    console.log('Population: ' + args.population);
    console.log('Area: ' + args.area);
    console.log('Political Status: ' + args.politicalStatus);

    if(args.politicalStatus === "Republic")
    {
        console.log('President: ' + args.president);
    }
    else if(args.politicalStatus === "Monarchy")
    {
        console.log('Monarch: ' + args.monarch);
    }

    console.log('Official Curency: ' + args.officialCurrency);
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


//renderAllContinents(continents);
//renderSingleContinent(continents['Europe']);
//renderSingleCountry(continents['Europe']['countries']['Bulgaria']);


