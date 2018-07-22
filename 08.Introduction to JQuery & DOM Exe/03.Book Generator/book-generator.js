
let id = 1;

function createBook(selector, title, author, ISBN) {

        let div = $('<div></div>');
        div.attr('id','book' + id);
        div.css("border","medium none");

        let pTitle = $('<p></p>');
        pTitle.addClass('title');
        pTitle.text(title);

        let pAuthor = $('<p></p>');
        pAuthor.addClass('author');
        pAuthor.text(author);

        let pIsbn = $('<p></p>');
        pIsbn.addClass('isbn');
        pIsbn.text(ISBN);

        let buttonSelect = $('<button></button>');
        let buttonDeselect = $('<button></button>');

        buttonSelect.text('Select');
        buttonDeselect.text('Deselect');

        buttonSelect.click(function() {
           $(div).css("border","2px solid blue")
        });

        buttonDeselect.click(function() {
            $(div).css("border","none")
        });

        div.append(pTitle);

        div.append(pAuthor);

        div.append(pIsbn);

        div.append(buttonSelect);
        div.append(buttonDeselect);

        $(selector).append(div);
        $(selector).append('<br>');
    id++;
}

createBook(
    $('#wrapper'),
    "Lord of the rings",
    "Atanas Kambitov",
    5544
);

createBook(
    $('#wrapper'),
    "The Tree of Life",
    "Jack Daniels",
    3422
);

createBook(
    $('#wrapper'),
    "Harry Poter",
    "Johnny Walker",
    6678
);