/**
 * Created by user on 11/11/2017.
 */



function solve(args)
{

    let obj = {};
    let arrayWithValues = [];
    args.forEach( a => {


        let keyAndValue = a.split(' ');

        if(keyAndValue.length > 1)
        {
            let key = keyAndValue[0];
            let value = keyAndValue[1];

            if(!(key in obj))  // ako ne sudurjame tozi kluch
                arrayWithValues = [];
            else
                arrayWithValues = obj[key];

            arrayWithValues.push(value);
            obj[key] = arrayWithValues;
        }
        else
        {
            if(obj.hasOwnProperty(a)) {
                obj[a].forEach(v => {
                    console.log(v);
                })
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










