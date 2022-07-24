const searchForm = document.forms[0];
// const resultList = document.getElementsByClassName('search-popup-result')[0];

searchForm.addEventListener('submit', submit);

function submit(event) {
    // alert(searchForm.elements.search.value)
    if(searchForm.elements.search.value.trim() === ''){
        event.preventDefault();
        return;
    }
    event.preventDefault();
    // alert(String.fromCharCode(10))

    // let items = '';
    resultList.getElementsByTagName('ul')[0].remove();
    let list = document.createElement('ul');

    for (let i = 0; i < 5; i++) {
        let li = musicItem({
                    img: 'music-image-default.jpg',
                    title: `${i+1}. Coldplay - Viva la vida`
                })
        list.appendChild(li);
        // items += musicItem({
        //     img: "music-image-default.jpg",
        //     title: "Coldplay - Viva la vida"
        // });
    }
    if(!list.hasChildNodes()){
        list.innerHTML = '<li style="text-align: center">Nenhum resultado encontrado 😥</p>';
    }
    resultList.appendChild(list);
    resultList.style.display = '';
}

function musicItem(music){
    let li = document.createElement('li');
    li.classList.add('music-item');

    let span = document.createElement('span');

    let img = document.createElement('img');
    img.src = `assets/imgs/${music.img}`;
    img.classList.add('music-img');
    img.alt = `Imagem de ${music.title}`;

    span.appendChild(img);
    li.appendChild(span);

    let p = document.createElement('p');
    p.classList.add('music-title');
    p.innerText = music.title;
    li.appendChild(p);

    let btn = document.createElement('button');
    btn.type = 'button';
    let icon = img.cloneNode();
    icon.src = 'assets/imgs/play-icon.svg';
    icon.alt = 'play icon';
    icon.className = '';
    btn.appendChild(icon);
    li.appendChild(btn);

    btn = btn.cloneNode();
    icon = icon.cloneNode();
    icon.src = 'assets/imgs/plus-icon.svg';
    icon.alt = 'plus icon';
    btn.appendChild(icon);
    li.appendChild(btn);

    return li;

    // return `<li class="music-item">
    //             <span>
    //                 <img src="assets\\imgs\\${music.img}" class="music-img" alt="icon da música">
    //             </span>
    //             <p class="music-title">${music.title}</p>
    //             <button type="button"><img src="assets\\imgs\\Play-icon.svg" alt="play icon"></button>
    //             <button type="button">
    //                 <img src="assets\\imgs\\plus-icon.svg" alt="plus icon">
    //             </button>
    //         </li>`;
}