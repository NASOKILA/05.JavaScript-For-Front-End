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

renderAllPunshes(punshes);
renderSinglePunsh(punshes, "Punsh - The American Pie");

function renderAllPunshes(punshes) {

    for(let i in punshes)
    {
        let punshName = punshes[i]['name'];
        console.log(punshName);

    }

}

function renderSinglePunsh(punshes, punshName) {

    for(let i in punshes)
    {
        let punshname = punshes[i]['name'];

        if(punshname === punshName)
        {
            let punsh = punshes[i];

            console.log(punshes[i]['name']);
            console.log("Type: " + punshes[i]['type']);
            console.log("Contents: " + punshes[i]['contents']);
            console.log("Description: " + punshes[i]['description']);

        }
    }

}

