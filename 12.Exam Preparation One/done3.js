

$('button').click(

function attachEvents() {

    //vzimame ot formata
    let inputText = $('.location-input').val();

    if(inputText !== "")
    {
        //zakachame noviq div za .result
        let newDiv = $('<div class="result-element">' + inputText + '</div>')
        newDiv.appendTo($('.result'))
    }
    //chistim input poleto
    $('.location-input').val('');
}
);