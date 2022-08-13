const searchForm = document.forms[0];
const countMusic = document.getElementsByClassName('music-list-count')[0];
// const resultList = document.getElementsByClassName('search-popup-result')[0];

searchForm.addEventListener('submit', submit);

/**
 * Gerencia o evento de onsubmit do formulário de pesquisa
 * @param {SubmitEvent} event
 */
function submit(event) {
    // alert(searchForm.elements.search.value)
    if(searchForm.elements.search.value.trim() === ''){
        event.preventDefault();
        return;
    }
    event.preventDefault();
    // alert(String.fromCharCode(10))

    // let items = '';
    try {
        resultList.getElementsByTagName('ul')[0].remove();
    } catch (error) {}
    let list = document.createElement('ul');

    for (const music of musics.data) {

        if (music.title.includes(searchForm.elements.search.value)) {            
            let li = musicResult(music)
            // {
            //     img: 'music-image-default.jpg',
            //     title: `${i+1}. Coldplay - Viva la vida`
            // }
            list.appendChild(li);
        }
        // items += musicItem({
        //     img: "music-image-default.jpg",
        //     title: "Coldplay - Viva la vida"
        // });
    }
    if(!list.hasChildNodes()){
        list.innerHTML = '<li><p style="text-align: center; margin-right: auto;">Nenhum resultado encontrado 😥</p></li>';
    }
    resultList.appendChild(list);
    resultList.style.display = '';
}
/**
 * Resultado da música pesquisada
 * @param music resultado da música pesquisada
 * @returns HTMLLIElement
 */
function musicResult(music){
    let li = document.createElement('li');
    li.classList.add('music-item');
    li.dataset.musicDuration = music.duration;
    
    let span = document.createElement('span');
    
    let img = document.createElement('img');
    img.src = `assets/imgs/${music.img}`;
    img.classList.add('music-img');
    img.alt = `Imagem de ${music.title}`;
    li.dataset.musicImg = music.img; 
    
    span.appendChild(img);
    li.appendChild(span);
    
    let p = document.createElement('p');
    p.classList.add('music-title');
    p.innerText = music.title;
    li.appendChild(p);
    li.dataset.musicTitle = music.title; 
    
    let btn = document.createElement('button');
    btn.type = 'button';
    // let icon = img.cloneNode();
    // icon.src = 'assets/imgs/play-icon.svg';
    // icon.alt = 'play icon';
    // icon.className = '';
    // btn.appendChild(icon);
    // let firstClick = true;
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="11.599" height="15.187" viewBox="0 0 11.599 15.187">
                        <path fill="rgb(0,0,0)" fill-rule="evenodd" d="M11.376 8.00951912l-10.599 7.066c-.15341272.10208886-.35054332.11151911-.51300056.02454072C.10154219 15.01308144.00009519 14.84379497 0 14.65951912v-14.132C.0000952.34324326.10154219.1739568.26399944.0869784.42645668 0 .62358728.00943026.777.11151912l10.599 7.066c.13907756.09273659.22261218.24883946.22261218.416 0 .16716053-.08353462.3232634-.22261218.416z"/>
                    </svg>
                    `;
    btn.addEventListener('click', player);
    li.dataset.musicUrl = music.url; 
    li.appendChild(btn);

    btn = btn.cloneNode();
    // icon = icon.cloneNode();
    // icon.src = 'assets/imgs/plus-icon.svg';
    // icon.alt = 'plus icon';
    // btn.appendChild(icon);
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                        <path fill="rgb(0,0,0)" fill-rule="evenodd" d="M6 6V0h2v6h6v2H8v6H6V8H0V6h6z"/>
                    </svg>
                    `;

    btn.addEventListener('click', addMusic);

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

/**
 * Adiciona música a lista de reprodução
 * @param {MouseEvent} event
 */
function addMusic(event) {
    let target = event.target.closest('li');
    let li = document.createElement('li');
    li.classList.add('music-item');
    li.dataset.musicUrl = target.dataset.musicUrl; 
    
    let span = document.createElement('span');
    
    let img = document.createElement('img');
    img.src = `assets/imgs/${target.dataset.musicImg}`;
    img.classList.add('music-img');
    img.alt = `Imagem de ${target.dataset.musicTitle}`;
    li.dataset.musicImg = target.dataset.musicImg;
    
    span.appendChild(img);
    li.appendChild(span);
    
    let p = document.createElement('p');
    p.classList.add('music-title');
    li.dataset.musicTitle = p.innerText = target.dataset.musicTitle;
    li.appendChild(p);
    
    p = p.cloneNode();
    p.classList.replace('music-title','music-time');
    li.dataset.musicDuration = p.innerText = target.dataset.musicDuration;
    // li.dataset.musicDuration = target.dataset.musicDuration;
    li.appendChild(p);

    let btn = document.createElement('button');
    btn.type = 'button';
    btn.innerHTML = '<img src="assets/imgs/more-icon.svg" alt="more icon"/>'+
                    '<div class="music-option"><button type="button">'+
                    `<svg xmlns="http://www.w3.org/2000/svg" width="11.599" height="15.187" viewBox="0 0 11.599 15.187">
                    <path fill="rgb(0,0,0)" fill-rule="evenodd" d="M11.376 8.00951912l-10.599 7.066c-.15341272.10208886-.35054332.11151911-.51300056.02454072C.10154219 15.01308144.00009519 14.84379497 0 14.65951912v-14.132C.0000952.34324326.10154219.1739568.26399944.0869784.42645668 0 .62358728.00943026.777.11151912l10.599 7.066c.13907756.09273659.22261218.24883946.22261218.416 0 .16716053-.08353462.3232634-.22261218.416z"/>
                    </svg></button>`+
                    '<button type="button">Delete</button></div>';
    li.appendChild(btn);

    let btnsOpt = btn.getElementsByTagName('button');
    btnsOpt.item(0).addEventListener('click', player);

    musicList.appendChild(li);
    countMusic.innerText = `Músicas listadas: ${musicList.children.length}`;
    // <li class="music-item">
    //                         <span>
    //                             <img src="assets\imgs\music-image-default.jpg" class="music-img" alt="icon da música">
    //                         </span>
    //                         <p class="music-title">Ed Sheeran - Perfect</p>
    //                         <p class="music-time">03:25</p>
    //                         <button type="button">
    //                             More
    //                         </button>
    //                     </li>
}