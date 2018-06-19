/**
 * Created by user on 11/11/2017.
 */

function solve (args)
{
    let students = [];
    args.forEach(js => { // jsonString e tova koeto poluchavame
        let student = JSON.parse(js);
        // sega go parsvame kum obekt i zapisvame v student

        students.push(student);

        //Edin obekt moje da bude i stringosvan t.e. prevurnat na string!
    });

    students.forEach( s => {
        console.log(`Name: ${s.name}`);
        console.log(`Age: ${s.age}`);
        console.log(`Date: ${s.date}`);
        console.log();
    });
}

solve([
    '{"name":"Gosho","age":10,"date":"19/06/2005"}',
    '{"name":"Tosho","age":11,"date":"04/04/2005"}']);

