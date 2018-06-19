/**
 * Created by user on 16/11/2017.
 */

function timer() {

    let seconds = 0;
    let minutes = 0;
    let hours = 0;



    let timer;
    $('#start-timer').click(function() {

        //Imame funkciq kato parametur sus
        // milisekundi kato time interval t.e. funkciqta se izpulnqva
        //na vseki 1000 milisekundi

        //keep only one function active
        if(seconds === 0) {
            timer = setInterval(function () {

                if (seconds < 10)
                    $('#seconds').text('0' + seconds++);
                else
                    $('#seconds').text(seconds++);

                if (seconds === 60) {
                    seconds = 1;
                    minutes++;
                }

                if (minutes < 10)
                    $('#minutes').text('0' + minutes);
                else
                    $('#minutes').text(minutes);


                if (minutes === 60) {
                    minutes = 1;
                    hours++;
                }

                if (hours < 10)
                    $('#hours').text('0' + hours);
                else
                    $('#hours').text(hours);

            }, 1000);
        }

    });


    $('#stop-timer').click(function() {

        clearInterval(timer); //Spirame timera

        //printirame rezultata:

        $('#seconds').val(seconds);
        $('#minutes').val(minutes);
        $('#hours').val(hours);

        //setvame vsichko na nula
        seconds = 0;
        minutes = 0;
        hours = 0;

    });
}






























