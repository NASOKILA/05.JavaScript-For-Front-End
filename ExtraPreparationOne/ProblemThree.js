

$('button').click(function () {
    attachEvents();
});

function attachEvents() {

    let inputText = $('.location-input').val();

    let resultElementDiv = $('<div class="result-element">'+ inputText +'</div>');

    resultElementDiv.appendTo($('.result'));

    $('.location-input').val('');
}


















