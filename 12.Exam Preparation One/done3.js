
$('button').click(

function attachEvents() {

    let inputText = $('.location-input').val();

    if(inputText !== "")
    {
        let newDiv = $('<div class="result-element">' + inputText + '</div>')
        newDiv.appendTo($('.result'))
    }
  
    $('.location-input').val('');
}
);