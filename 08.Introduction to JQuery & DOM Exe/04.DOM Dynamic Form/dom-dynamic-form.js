/**
 * Created by user on 16/11/2017.
 */


function domDynamicForm(selector) {
    let conteiner = $(selector);

    let mainDiv = $('#content');
    mainDiv.addClass('items-control');

    let div = $('<div></div>');
    div.addClass('add-Controls');

    //label za diva
    let label = $('<label></label>');
    label.text('Enter text: ');
    label.append('<input/>');
    div.append(label); //dobavqme go kum diva


    let a = $('<a></a>');
    a.addClass('button');
    a.css("display","inline-block");
    a.text('Add');

    div.append( a); //dobavqme go kum diva

    conteiner.append(div);


    //result-controls div

    let divResultControls = $('<div></div>');
    divResultControls.addClass('result-controls');

    let ul = $('<ul></ul>');
    ul.addClass('items-list');


    a.css("margin-left","20px");

    //cursor pri hover
    a.hover(function() {
        $(this).css("cursor", "pointer")
    });

    //click funkciq za dobavqne
    a.click(function () {

        //vzimame texta ot formata
            let inputText = $('input').val();

        //pravim li element s <a> vutre i sus strong tag s ime na texta ot inputa !
        let li = $('<li></li>');
        li.addClass('list-item');

        //<a> element za <li>
        let aForLi = $('<a></a>');
        aForLi.addClass('button');
        aForLi.text('X');

        li.append(aForLi); //Zakachame go za <li>

        //<strong> s text ot inputa
        let strong = $('<strong></strong>');
        strong.text(inputText);

        li.append(strong); //zakachame go za li-to

        ul.append(li);//zakachame go za spisuka

        //Dobavih mu cursor da e po krasivo
        aForLi.hover(function() {
            $(this).css("cursor", "pointer")
        });


        //Pri klikvane na Xcheto premahvame elementa
        aForLi.click(function() {

            li.remove();
        });

    });


    divResultControls.append(ul); //zakahame ul-a

    mainDiv.append(divResultControls); // zakachame celiq div


}

domDynamicForm("#content");






