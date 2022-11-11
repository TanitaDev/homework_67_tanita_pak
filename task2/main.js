fetch(url = 'https://www.breakingbadapi.com/api/characters', data = {
    method: 'GET',
})
    .then(response => {
        return response.json();
    })
    .then(data => {
        // data.forEach(char => {
        //     let markUp = `<p>${char['name']}</p>`
        //     document.querySelector('.character_item').insertAdjacentHTML('beforeend', markUp)
        // });
        for (let i = 0; i < data.length; i++) {
            let char_data = data[i]
            let markUp = `<a href="" id="characterIitem" class="character_item">
                                <div class="img">
                                <img src="${char_data['img']}" alt="" />
                                </div>
                                <p class="name_label">${char_data['name']}</p>
                            </a>`
            $(".characters_block").append(markUp)
        }
    })
