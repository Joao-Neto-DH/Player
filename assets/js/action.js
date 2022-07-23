const searchForm = document.forms[0];

searchForm.addEventListener('submit', submit);

function submit(event) {
    // alert(searchForm.elements.search.value)
    if(searchForm.elements.search.value.trim() === ''){
        event.preventDefault();
        return;
    }
    event.preventDefault();
    // alert(String.fromCharCode(10))

    let items = '';
    for (let i = 0; i < 5; i++) {
        items += musicItem({
            img: "music-image-default.jpg",
            title: "Coldplay - Viva la vida"
        });
    }
    resultList.querySelector('ul').innerHTML = items;
}

function musicItem(music){
    return `<li class="music-item">
                <span>
                    <img src="assets\\imgs\\${music.img}" class="music-img" alt="icon da música">
                </span>
                <p class="music-title">${music.title}</p>
                <button type="button"><img src="assets\\imgs\\Play-icon.svg" alt="play icon"></button>
                <button type="button">
                    <img src="assets\\imgs\\plus-icon.svg" alt="plus icon">
                </button>
            </li>`;
}