
/*
let id = 1;

    //create the div
    let div = $('<div></div>');
    div.attr('id','book' + id);
    div.css("border","medium none");


    //create the <p> title
    let pTitle = $('<p></p>');
    pTitle.addClass('title');
    pTitle.val(title);

    //create the <p> author
    let pAuthor = $('<p></p>');
    pTitle.addClass('author');
    pTitle.val(author);

    //create ISBN number
    let pIsbn = $('<p></p>');
    pTitle.addClass('isbn');
    pTitle.val(ISBN);

    //create buttons
    let buttonSelect = $('<button></button>');
    let buttonDeselect = $('<button></button>');


    $("#wrapper").append(div);
*/

let id = 1;

function createBook(selector, title, author, ISBN) {

        //create the div
        let div = $('<div></div>');
        div.attr('id','book' + id);
        div.css("border","medium none");

        //create the <p> title
        let pTitle = $('<p></p>');
        pTitle.addClass('title');
        pTitle.text(title);

        //create the <p> author
        let pAuthor = $('<p></p>');
        pAuthor.addClass('author');
        pAuthor.text(author);

        //create ISBN number
        let pIsbn = $('<p></p>');
        pIsbn.addClass('isbn');
        pIsbn.text(ISBN);

        //create buttons
        let buttonSelect = $('<button></button>');
        let buttonDeselect = $('<button></button>');

        buttonSelect.text('Select');
        buttonDeselect.text('Deselect');


        //click funkcii za butonite:
        buttonSelect.click(function() {
           $(div).css("border","2px solid blue")
        });


        buttonDeselect.click(function() {
            $(div).css("border","none")
        });

        //append <p> Title to the div
        div.append(pTitle);

        //append <p> Author to the div
        div.append(pAuthor);

        //append <p> ISBN to the div
        div.append(pIsbn);

        div.append(buttonSelect);
        div.append(buttonDeselect);


        //append the di to the wrapper
        $(selector).append(div);
        $(selector).append('<br>');


    id++;
}

    //book1
    createBook(
        $('#wrapper'),
        "Lord of the rings",
        "Atanas Kambitov",
        5544
    );


//book2
createBook(
    $('#wrapper'),
    "The Tree of Life",
    "Jack Daniels",
    3422
);

//book3
createBook(
    $('#wrapper'),
    "Harry Poter",
    "Johnny Walker",
    6678
);

















