/**
 * Created by user on 11/11/2017.
 */


function solve(args)
{
    let n = args[0];
    let x = args[1];

    let result = Number(n) * Number(x);

    if(Number(x) < Number(n))
        result = Number(n) / Number(x);

    console.log(result);
}

solve(['2','3']);

solve(['13','13']);

solve(['3','2']);

solve(['144','12']);








