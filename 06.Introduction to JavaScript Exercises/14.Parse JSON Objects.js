/**
 * Created by user on 11/11/2017.
 */

function solve (args)
{
    let students = [];
    args.forEach(js => { 
        let student = JSON.parse(js);

        students.push(student);
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
