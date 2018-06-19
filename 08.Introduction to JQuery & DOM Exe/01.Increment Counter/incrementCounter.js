
//VAJNO : PERFORMANCE E VAJEN INACHE SHTE IMAME PROBLEMI PO NAPRED
//promenlivite sa camelCase, Da nqma przni raztoqniq vuv faila
//Speisove mejdu zapetaite, ne propuskai ';' nakraq
//Koda trqbva da e chist i lesno chetim



function increment(selector)
{
        var container = $(selector); //vzimame si samiq element v koito she slagame neshtata
        var textAreaNumberValue = 0;    //Pravim si promenliva da pazi stoinostta v textareata koqto shte promenqme
        var textArea = $('<textarea ></textarea>');
        var buttonIncrement = $('<button>Increment</button>');
        var buttonAdd = $('<button>Add</button>');
        var listUl = $('<ul></ul>');


        //Trqbva da si dobavim atributite kum elementite

        textArea.val(textAreaNumberValue);
        textArea.addClass('counter');
        textArea.attr('disabled', true);

        buttonIncrement.addClass('btn');
        buttonIncrement.attr('id', 'incrementBtn');

        buttonAdd.addClass('btn');
        buttonAdd.attr('id', 'addBtn');

        listUl.addClass('results');


        //click eventite
        $(buttonIncrement).click(function () {
            textAreaNumberValue++;
            textArea.val(textAreaNumberValue);
        });

        $(buttonAdd).click(function() {
           var li = $('<li>' + textAreaNumberValue + '</li>');
            listUl.append(li);
        });


        //Nakraq si dobavqme elementite kum konteinera :
    $(container).append(textArea);

    $(container).append('<br>');
    $(container).append(buttonIncrement);

    $(container).append('<br>');
    $(container).append(buttonAdd);

    $(container).append('<br>');
    $(container).append(listUl);

}

increment('#wrapper');
increment('#wrapper2');
increment('#wrapper3');




















