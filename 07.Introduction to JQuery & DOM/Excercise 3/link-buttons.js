/**
 * Created by user on 11/11/2017.
 */

function attachEvents(){
    $('.button').click(function () {
        $('.selected').removeClass("selected");
        $(this).addClass("selected");
    });
}