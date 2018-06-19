


let punshes = {
    0: {
        name: "One Punsh Man",
        type: "Strong",
        contents: "Very little Vodka, Very little Brendy, Very little Wine, Very little Whiskey, Very little Tequila and a lot of Watermelon Juice.",
        description: "This punsh was discovered in an unknown house party, when there was almost no alcohol left, and the people had to combine a little from every alchohol. One Punsh of this is enough to knock you down for good, hence the name."
    },
    1: {
        name: "Wine Punsh",
        type: "Sweet",
        contents: "Wine, Apple Juice, Ice.",
        description: "Casual Wine Punsh, for the ladies that love wine. It is not very strong, it is actually sweet. Sweet enough to make them sweetly drunk and playful."
    },
    2: {
        name: "Punsh Out",
        type: "Sweet",
        contents: "Champagne, Watermellon Juice, Ice.",
        description: "This is a very sweet, almost non-alchoholic, punsh. Very suitable for ladies, which want to keep their manners but have a little fun at a party."
    }
};

attachPunshesEvents(punshes);
function attachPunshesEvents(punshes) {

    renderAllPunshesInHTML(punshes);
}

function renderAllPunshesInHTML(punshes) {

    //Zakachame si itemite zashtoto gi nqmame
    let navbarItemsDiv = $('<div class="navbar-items"></div>')
        .appendTo($('.navbar'));

    for(let i in punshes)
    {
        let punshName = punshes[i]['name'];
        let navbarItemDiv = $('<div class="navbar-item"></div>')
            .append($('<h4>'+ punshName +'</h4>'))
            .appendTo(navbarItemsDiv);



        //V Gifcheto cursora idva na <h4> a ne na samiq navbar-item
        // zatova shte go smenq da si bude ne <h4>
        navbarItemDiv.css('cursor','default');
        $('h4').css('cursor','pointer');


        //Event to .navbar-item
        navbarItemDiv.unbind('click').bind('click',function(e){

            //mahame navbar-items
            navbarItemsDiv.remove();

            //renderirame informaciqta za kliknatiq push
            let punshToRender = $(this)[0].innerText;

            //podavame go kum renderSinglePunshInHTML Tam mi e back eventa
            renderSinglePunshInHTML(punshes, punshToRender);

        });


    }
}

function renderSinglePunshInHTML(punshes, punshName) {

    for(let i in punshes) {

        let allPunshes = punshes;

        let punshname = punshes[i]['name'];

        if (punshname === punshName) {

            //Namerihme podadeniq punsh
            let punsh = punshes[i];

            let passedPunshName = punshes[i]['name'];
            let passedPunshType = punshes[i]['type'];
            let passedPunshContent = punshes[i]['contents'];
            let passedPunshDescription = punshes[i]['description'];


            let contentHeaderDiv = $('<div class="content-header"></div>')
                .appendTo($('.content'));

            let contentHeadingDiv = $('<div class="content-heading">' + passedPunshName + '</div>')
                .appendTo(contentHeaderDiv);


            //set cursor to be pointer
            contentHeadingDiv.css('cursor','pointer');


            //Vednaga seld suzdavaneto na elementa mu zakacham backEventa
            //Back Event
            $(contentHeadingDiv).click(function(){
                attachBackEvents(allPunshes);
            });


            let punshDataDiv = $('<div class="punsh-data"></div>')
                .appendTo($('.content'));

            let punshTypeDiv = $('<div class="punsh-type"></div>')
                .append($('<label>Type: </label>'))
                .append($('<h6>' + passedPunshType + '</h6>'))
                .appendTo(punshDataDiv);

            let punshContentsDiv = $('<div class="punsh-contents"></div>')
                .append($('<label>Contents: </label>'))
                .append($('<p>' + passedPunshContent + '</p>'))
                .appendTo(punshDataDiv);

            let punshDescriptionDiv = $('<div class="punsh-description"></div>')
                .append($('<label>Description: </label>'))
                .append($('<p>' + passedPunshDescription + '</p>'))
                .appendTo(punshDataDiv);
        }

    }
}

function attachBackEvents(punches) {

    //clear the content
    $('.content-header').remove();
    $('.punsh-data').remove();

    //render all punshes again
    attachPunshesEvents(punshes);
}






