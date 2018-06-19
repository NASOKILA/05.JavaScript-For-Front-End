let punshes = {
    0: {
        name: "Punsh - The American Pie",
        type: "Strong",
        contents: "Some Apple Pie, Whiskey, Vodka, Orange Juice and some other things...",
        description: "By original recipe from the American Pie franchise, this punsh includes everything you would want in a college/university party."
    },
    1: {
        name: "Brendy Punsh",
        type: "Medium",
        contents: "Brendy, Apple Juice, Ice, Avocado Juice, some other strange fruits...",
        description: "The casual Brendy Punsh, quite expensive, nothing interesting here..."
    },
    2: {
        name: "Just Punsh it",
        type: "Sweet",
        contents: "Very Little Vodka, Orange Juice, Apple Juice, Banana Juice, Ice.",
        description: "A very comfortable taste for the lovers of weakly alchoholic drinks. The Just Pinsh It punsh is a sweet multi-vitamol drink, which cannot drunk you."
    }
};

renderAllPunshesInHTML(punshes);
function renderAllPunshesInHTML(punshes) {

    let navbarItemsDiv = $('<div class="navbar-items"></div>')
        .appendTo($('.navbar'));

    for(let i in punshes)
    {
        let punshName = punshes[i]['name'];
        let navbarItemDiv = $('<div class="navbar-item"></div>')
            .append($('<h4>'+ punshName +'</h4>'))
            .appendTo(navbarItemsDiv);

        //V Gifcheto cursora idva na h4 taga a ne na samiq navbar-item
        // zatova shte go smenq da si bude ne <h4>
        navbarItemDiv.css('cursor','default');
        $('h4').css('cursor','pointer');

    }
}

renderSinglePunshInHTML(punshes, "Punsh - The American Pie");
function renderSinglePunshInHTML(punshes, punshName) {

    for(let i in punshes) {

        let punshname = punshes[i]['name'];

        if (punshname === punshName) {

            let punsh = punshes[i];

            let passedPunshName = punshes[i]['name'];
            let passedPunshType = punshes[i]['type'];
            let passedPunshContent = punshes[i]['contents'];
            let passedPunshDescription = punshes[i]['description'];

            let contentHeaderDiv = $('<div class="content-header"></div>')
                .appendTo($('.content'));

            let contentHeadingDiv = $('<div class="content-heading">' + passedPunshName + '</div>')
                .appendTo(contentHeaderDiv);

            //Add cursor on hover
            contentHeadingDiv.css('cursor','pointer');


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





