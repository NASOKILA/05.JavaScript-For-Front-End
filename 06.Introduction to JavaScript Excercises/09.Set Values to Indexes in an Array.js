/**
 * Created by user on 10/11/2017.
 */



function solve(args)
{
    let lengthOfArray = args[0];
    let values = new Array(Number(lengthOfArray));

    //we fill it with zeroes

    for(let i = 0; i<= Number(lengthOfArray)-1; i++)
        values[i] = 0;


    for(let i = 1; i <= args.length-1; i++)
    {

        let indexAndValue = args[i];
        indexAndValue = indexAndValue.split(' - ');
        let index = Number(indexAndValue[0]);
        let value = Number(indexAndValue[1]);

        values[index] = value;
    }
    values.forEach( v => {
        console.log(v);
    })
}

/*
solve([
    '3',
    '0 - 5',
    '1 - 6',
    '2 - 7']);
*/

/*
 solve([
 '2',
 '0 - 5',
 '0 - 6',
 '0 - 7']);
*/

solve([
    '5',
    '0 - 3',
    '3 - -1',
    '4 - 2']);









