/**
 * Created by user on 20/11/2017.
 */


//Taq funkciq shte se izpulni pri zarejdaneto.
$(() => {

    //Opredelqme si hosta, KUM NEGO SHE IZPTRASHTAME ZAQVKITE !
    const host = 'https://fir-phonebook-app.firebaseio.com/phonebook';
    const list = $(`#phonebook`);
    //Zakachame si evntite na butonite kato se natisnat da izpulnqvat dadenite funkcii !

    $('#btnLoad').click(loadContacts);
    $('#btnCreate').click(createContacts);


//AKO ISKAME MOJEM DA Zarejdame si kontakctite vednaga
    //loadContacts();

    //1.Load :
    //      --on click send GET request
    //      --pokazvame dannite v spisuk
    //      --TRQBVA DA GO IZTRIEM PURVO ZA DA NE ZAREJDA DVA PUTI.
    function loadContacts() {
        $.ajax({
            url: host + '.json',
            success: loadSuccess

        });
    }

    function loadSuccess(data) {
        //purvo si izchistvame spisuka.
        list.empty();

        //Show the data with this function
        //console.log(data);
        //Obhojdame vsichko v data, pravim si <li>-ta i gi zakachame za list
        for(let key in data)
        {
            //pravim si <li> elementi
            let entry = data[key];
            appendContacts(entry, key);
        }
    }

    function appendContacts(entry, key)
    {
        let name = JSON.stringify(entry.person);
        let phone = JSON.stringify(entry.phone);

        let fullData = name + phone;

        fullData = fullData.replace('"',' ');
        fullData = fullData.replace('""',': ');
        fullData = fullData.substring(0, fullData.length - 1);

        //Pravim si i delete butona na koito shte zakachim event i shte trie lita
        const deleteButton = $(`<button>X</button>`);
        deleteButton.click(() => deleteContact(key));


        const li = $(`<li id="${key}">${fullData}</li>`);
        li.append(deleteButton);
        list.append(li);

    }



    //2.Create contacts:
    //      --Vzimame dannite ot inputa
    //      --Pravim POST requesti kum bazata
    //      --Dobre e sled tova da refreshvame GET requesta
    function createContacts(){

        const person = $('#person').val();
        const phone = $('#phone').val();

        //Trqbva da proveri dali duljinata ne im e 0 t.e. dali formichkata e prazna !
        if(person.length < 1 || phone.length < 1)
        {
            $('#error').text('Both person and phone are required !');
            return;
        }

        //Trqbva da podadem metoda i parametrite s koito shte rabotim !
        $.ajax({
            url: host + '.json',
            method: 'POST',
            data: JSON.stringify({person,phone}),
            success: createSuccess
        });

        function createSuccess(data) {

            let phone = $(`#phone`).val();
            let person = $(`#person`).val();

            appendContacts({person, phone});

            //Triem greshki ako e imalo takiva !
            $('#error').empty();

            //Triem i poletata:
            $(`#phone`).val('');
            $(`#person`).val('');

            //Iskame pri samoto natiskane na Create butona da
            // se pokazva v spisuka noviq chovek s tela mu

            //zatova prosto go zakachame kum ul-a


        }
    }



    //3.Delete contacts:
    //      --dobavqme si butonche delete kum vseki elementit ot spisuka
    //      --Izprashtame delete zaqvka s ID-to na <li> elementa
    function deleteContact(key)
    {
        let keyOfLi = key;
        let item = $(`#${keyOfLi}`).parent();


        console.log(key);
        console.log(item);

        //key ni e klucha koito slojihme na <li>to po data-id

        $.ajax({
            url: host + "/" + keyOfLi + '.json',
            method: 'DELETE',
            success: item.remove()
        });

    }




});














