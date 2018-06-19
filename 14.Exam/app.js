

//1.
//vzimame si vsichki punishes i gi podavame imenata im na attachPunshesEvents()
$.ajax({
    url:'https://punsh-master.firebaseio.com/data/punshes.json',
    success:function(response){
        let punshes = response;

        //ot tqh vzimame samo imenata
        let punshesNames = [];
        for(let i in punshes)
            punshesNames.push(punshes[i]['name']);

        //i gi podavame
        attachPunshesEvents(punshesNames);
    }
});

function attachPunshesEvents(punshesNames) {

    renderAllPunshesInHTML(punshesNames)
}

function renderAllPunshesInHTML(punshesNames) {

//Zakachame si itemite zashtoto gi nqmame
    let navbarItemsDiv = $('<div class="navbar-items"></div>')
        .appendTo($('.navbar'));

    for(let i in punshesNames)
    {
        let punshName = punshesNames[i];
        let navbarItemDiv = $('<div class="navbar-item"></div>')
            .append($('<h4>'+ punshName +'</h4>'))
            .appendTo(navbarItemsDiv);


        //Event
        navbarItemDiv.unbind('click').bind('click',function(e){

            //2.
            //remove navbar-items
            navbarItemsDiv.remove();

            //renderirame informaciqta za kliknatiq push
            //Za da gi vzimam po edinichno mi trqbva indexa

            let punshToRender = $(this)[0].innerText;
            let indexOfPunshToRender;
            for(let i in punshesNames)
            {
                if(punshesNames[i] === punshToRender)
                    indexOfPunshToRender = i;
            }

            //Sled kato imame indexa ostava samo da zaredim kliknatiq punch
            //LOAD the punsh’s data
            $.ajax({
                url:'https://punsh-master.firebaseio.com/data/punshes/'+ indexOfPunshToRender +'.json',
                success:function(punshToPass){

                    //Render the data in a .content element.
                    renderSinglePunshInHTML(punshesNames, punshToPass);
                }
            });


        })

    }
}

function renderSinglePunshInHTML(punshesNames, punshToPass) {

    let allNames = punshesNames;

    for(let i in punshesNames) {

        let punshname = punshesNames[i];

        if (punshname === punshToPass['name']) {

            //Namerihme podadeniq punsh
            let punsh = punshToPass;

            let passedPunshName = punshToPass['name'];
            let passedPunshType = punshToPass['type'];
            let passedPunshContent = punshToPass['contents'];
            let passedPunshDescription = punshToPass['description'];

            let contentHeaderDiv = $('<div class="content-header"></div>')
                .appendTo($('.content'));

            let contentHeadingDiv = $('<div class="content-heading">' + passedPunshName + '</div>')
                .appendTo(contentHeaderDiv);

            contentHeadingDiv.css('cursor','pointer');


            //Attach The Back Event
            contentHeadingDiv.click(function()
            {
                attachBackEvents(allNames);
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

function attachBackEvents(allNames) {

    //clear the content
    $('.content-header').remove();
    $('.punsh-data').remove();

    //Repeta the first step render all punshes again
     attachPunshesEvents(allNames);
}


