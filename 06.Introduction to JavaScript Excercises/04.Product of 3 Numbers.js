/**
 * Created by user on 11/11/2017.
 */



function solve(args) {

    let x = args[0];
    let y = args[1];
    let z = args[2];

    let result = "";
    let negativeNums = [];
    if(x < 0)
        negativeNums.push(x);
    if(y < 0)
        negativeNums.push(y);
    if(z < 0)
        negativeNums.push(z);

    if(Number(negativeNums.length) % 2 == 1)
        result = "negative";
    else
        result = "positive";

    console.log(result);

}

//solve(['2','3','-1']);

//solve(['5','4','3']);

solve(['-3','-4','-5']);







