/**
 * Created by user on 11/11/2017.
 */


function attachEvents(){
    $('.button').click(function () {

        //Mahame klasa na tezi buton koito vehe go imat !
        $('.selected').removeClass("selected");

        //I go dobavqme na tozi koito klikvame v momenta !
        //pishem klasa bez tochka predi nego
        $(this).addClass("selected");


    });

    /*
    //Pravim si go pri doube click da mahame klasa .selected
    $('.button').dblclick(function(){

        $(this).removeClass("selected");
        //S metoda removeClass("ImeNaKlas"); mojem da mahame klasove !

    });
*/



}

