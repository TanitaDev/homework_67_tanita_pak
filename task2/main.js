fetch(url = 'https://www.breakingbadapi.com/api/characters')
    .then(response => {
        return response.json();
    })
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            let char_data = data[i]
            let markUp = `<a href="character.html?id=${char_data['char_id']}" id="characterIitem" class="character_item">
                                <div class="img">
                                <img src="${char_data['img']}" alt="" />
                                </div>
                                <p class="name_label">${char_data['name']}</p>
                            </a>`
            $(".characters_block").append(markUp)
        }
    })

let urlParams = new URLSearchParams(window.location.search);
let param = urlParams.get('id');

fetch(url = `https://www.breakingbadapi.com/api/characters/${param}`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            let char_data = data[i]
            let markUp = `<div class="img">
                        <img src="${char_data['img']}" alt="" />
                        </div>
                        <div class="info_block"> 
                            <p class="name">Name: <b>${char_data['name']}</b>;
                            <span class="nickname"> Nickname: <b>${char_data['nickname']}</b></span></p>
                            <p class="age">Age <b>${char_data['birthday']}</b></p>
                            <p class="occupation">Occupation <b>${char_data['occupation']}</b></p>
                            <p class="status">Status <b>${char_data['status']}</b></p>
                            <p class="portrayed">Portrayed by <b>${char_data['portrayed']}</b></p>
                            <p class="category">Category <b>${char_data['category']}</b></p>
                        </div>`

            $(".character_block").append(markUp)
        }
    })