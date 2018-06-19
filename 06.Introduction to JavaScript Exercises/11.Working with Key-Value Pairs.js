/**
 * Created by user on 11/11/2017.
 */



function solve(args)
{

    let obj = {};
    args.forEach( a => {


        let keyAndValue = a.split(' ');

        if(keyAndValue.length > 1)
        {
            let key = keyAndValue[0];
            let value = keyAndValue[1];

            obj[key] = value;
        }
        else
        {
            if(obj.hasOwnProperty(a)) {
                console.log(obj[a]);
            }
            else
            {
                console.log('None')
            }
        }
    })
}

solve([
    '3 test',
    '3 test1',
    '4 test2',
    '4 test3',
    '4 test5',
    '4']);
console.log();

solve(['key value',
    'key eulav',
    'test tset',
    'key']);


solve([
    '3 bla',
    '3 alb',
    '2']);




















