
 function Solve(args){

 let location = args.name;
 let longitude = args.longitude;
 let latitude = args.latitude;

 console.log('Location: ' + location);
 console.log('Longitude: ' + longitude + ' Latitude ' + latitude);

 let pokemons = args.pokemons;

 if(pokemons) { //Proverqvame dali vuobshte ima pokemoni

 console.log('Pokemons:');
 for (let p in pokemons) {
 console.log('###Name: ' + pokemons[p].name);
 console.log('###Power: ' + pokemons[p].power + 'pp');
 console.log('###Evolved From: ' + pokemons[p].evolvedFrom);
 console.log('###Evolves To: ' + pokemons[p].evolvesTo);
 }

 }
 }

 let Loaction = {
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

 Solve(Loaction);
