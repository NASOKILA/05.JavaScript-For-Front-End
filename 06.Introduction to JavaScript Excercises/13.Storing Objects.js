/**
 * Created by user on 11/11/2017.
 */


function solve(args)
{
    args.forEach( p => {

        let obj = {};

        let arr = p.split(' -> ');
        let n = arr[0];
        let a = arr[1];
        let g = arr[2];

        obj["name"] = n;
        obj["age"] = a;
        obj["grade"] = g;

        //let resultInStr = JSON.stringify(obj);
        //let resultInJson = JSON.parse(resultInStr);


        //POLZVAME PLACEHOLDER ZA VIZUALIZACIQ
        console.log(`Name: ${obj.name}`);
        console.log(`Age: ${obj.age}`);
        console.log(`Grade: ${obj.grade}`);
        console.log();
    })

}
solve([
    'Pesho -> 13 -> 6.00',
    'Ivan -> 12 -> 5.57',
    'Toni -> 13 -> 4.90']);






