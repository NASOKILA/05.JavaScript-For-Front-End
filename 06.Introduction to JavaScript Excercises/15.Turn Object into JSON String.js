/**
 * Created by user on 11/11/2017.
 */


function solve(args)
{
    let obj = {};
    for(let a of args)
    {
        let keyAndValue = a.split(' -> ');
        let key = keyAndValue[0];
        let value = keyAndValue[1];

        obj[key]=value;
    }

    let result = JSON.stringify(obj);
    console.log(result);
}

solve([
    "name -> Angel",

    "surename -> Georgiev",
    "age -> 20",
    "grade -> 6.00",
    "date -> 23/05/1992",
    "town -> Sofia"]);