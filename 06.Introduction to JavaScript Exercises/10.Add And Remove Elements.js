/*Created by user on 11/11/2017.*/

function solve(args) {
    let arr = [];

    args.forEach( a => {
        let input = a.split(' ');
        let command = input[0];

        if(command === "add")
        {
            let number = input[1];
            arr.push(number);
        }
        else if(command === "remove")
        {
            let index = input[1];
            arr.splice(index, 1); // mahame elementa sus .splice() !
        }

    });

    arr.forEach( a => {
        console.log(a);
    })

}
/*
solve([
    'add 3',
    'add 5',
    'add 7']);
*/

/*
solve([
    'add 3',
    'add 5',
    'remove 1',
    'add 2']);
*/

solve([
    'add 3',
    'add 5',
    'remove 2',
    'remove 0',
    'add 7']);















