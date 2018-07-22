/**
 * Created by user on 16/11/2017.
 */

function domDynamicForm(selector) {
    let conteiner = $(selector);

    let mainDiv = $('#content');
    mainDiv.addClass('items-control');

    let div = $('<div></div>');
    div.addClass('add-Controls');

    let label = $('<label></label>');
    label.text('Enter text: ');
    label.append('<input/>');
    div.append(label); 

    let a = $('<a></a>');
    a.addClass('button');
    a.css("display","inline-block");
    a.text('Add');

    div.append( a); 

    conteiner.append(div);

    let divResultControls = $('<div></div>');
    divResultControls.addClass('result-controls');

    let ul = $('<ul></ul>');
    ul.addClass('items-list');

    a.css("margin-left","20px");

    a.hover(function() {
        $(this).css("cursor", "pointer")
    });

    a.click(function () {

        let inputText = $('input').val();

        let li = $('<li></li>');
        li.addClass('list-item');

        let aForLi = $('<a></a>');
        aForLi.addClass('button');
        aForLi.text('X');

        li.append(aForLi);

        let strong = $('<strong></strong>');
        strong.text(inputText);

        li.append(strong);

        ul.append(li);

        aForLi.hover(function() {
            $(this).css("cursor", "pointer")
        });

        aForLi.click(function() {
            li.remove();
        });

    });

    divResultControls.append(ul);

    mainDiv.append(divResultControls); 
}

domDynamicForm("#content");