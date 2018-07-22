/**
 * Created by user on 20/11/2017.
 */

$(() => {

    const host = 'https://fir-phonebook-app.firebaseio.com/phonebook';
    const list = $(`#phonebook`);
    
    $('#btnLoad').click(loadContacts);
    $('#btnCreate').click(createContacts);

    function loadContacts() {
        $.ajax({
            url: host + '.json',
            success: loadSuccess
        });
    }

    function loadSuccess(data) {
       
        list.empty();

        for(let key in data)
        {
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

        const deleteButton = $(`<button>X</button>`);
        deleteButton.click(() => deleteContact(key));

        const li = $(`<li id="${key}">${fullData}</li>`);
        li.append(deleteButton);
        list.append(li);
    }
	
	function createContacts(){

        const person = $('#person').val();
        const phone = $('#phone').val();

        if(person.length < 1 || phone.length < 1)
        {
            $('#error').text('Both person and phone are required !');
            return;
        }

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

            $('#error').empty();

            $(`#phone`).val('');
            $(`#person`).val('');
        }
    }

    function deleteContact(key)
    {
        let keyOfLi = key;
        let item = $(`#${keyOfLi}`).parent();


        console.log(key);
        console.log(item);
		
        $.ajax({
            url: host + "/" + keyOfLi + '.json',
            method: 'DELETE',
            success: item.remove()
        });
    }
});
