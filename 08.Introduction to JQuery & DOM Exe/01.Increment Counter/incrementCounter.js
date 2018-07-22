
function increment(selector)
{
        var container = $(selector); 
        var textAreaNumberValue = 0;    
        var textArea = $('<textarea ></textarea>');
        var buttonIncrement = $('<button>Increment</button>');
        var buttonAdd = $('<button>Add</button>');
        var listUl = $('<ul></ul>');

        textArea.val(textAreaNumberValue);
        textArea.addClass('counter');
        textArea.attr('disabled', true);

        buttonIncrement.addClass('btn');
        buttonIncrement.attr('id', 'incrementBtn');

        buttonAdd.addClass('btn');
        buttonAdd.attr('id', 'addBtn');

        listUl.addClass('results');

        $(buttonIncrement).click(function () {
            textAreaNumberValue++;
            textArea.val(textAreaNumberValue);
        });

        $(buttonAdd).click(function() {
           var li = $('<li>' + textAreaNumberValue + '</li>');
            listUl.append(li);
        });

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