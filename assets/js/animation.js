const cover = document.getElementsByClassName('cover')[0];
const playlist = document.getElementsByClassName('playlist')[0];
const btn_list = document.querySelector('[data-list]');
const controllerHideClassName = 'controller-closed';
const btnPlay = document.querySelector('[data-control=play]');
let timer = setTimeout(hideController,5*1000);

cover.addEventListener('click', openPlaylist);
btn_list.addEventListener('click', openPlaylist);
window.addEventListener('load', () => {
    cover.style.display = playlist.classList.contains('playlist-closed') ? 'none' : '';
});

window.addEventListener('mousemove', (event) => {
    // console.log(timer);
    controller.classList.remove(controllerHideClassName);
    clearTimeout(timer);
    timer = setTimeout(hideController,5*1000);
});
/**
 * Gerencia o evento de abertura da playlist
 */
function openPlaylist(event) {
    playlist.classList.toggle('playlist-closed');
    cover.style.display = playlist.classList.contains('playlist-closed') ? 'none' : '';
    searchForm.elements.search.value = '';
    
    if(resultList.firstChild){
        resultList.firstChild.remove();
    }
    resultList.style.display = 'none';
}
/**Gerencia a ocultação dos controles*/
function hideController() {
    controller.classList.add(controllerHideClassName);
}
/**
 * 
 * @param {HTMLButtonElement} playButton 
 * @param {bool} playing 
 */
function playIconUpdate(playing) {
    // console.log(btnPlay);
    btnPlay.innerHTML = playing ? 
        `<svg xmlns="http://www.w3.org/2000/svg" width="9" height="21" viewBox="0 0 9 21">
            <path fill="rgb(223,223,223)" fill-rule="evenodd" d="M0 21.00001907V0h3.00000763v21.00001907H0zm6.00002289 0V0h3.00000763v21.00001907H6.00002289z"/>
        </svg>`
        :
        `<svg xmlns="http://www.w3.org/2000/svg" width="11.599" height="15.187" viewBox="0 0 11.599 15.187">
            <path fill="rgb(0,0,0)" fill-rule="evenodd" d="M11.376 8.00951912l-10.599 7.066c-.15341272.10208886-.35054332.11151911-.51300056.02454072C.10154219 15.01308144.00009519 14.84379497 0 14.65951912v-14.132C.0000952.34324326.10154219.1739568.26399944.0869784.42645668 0 .62358728.00943026.777.11151912l10.599 7.066c.13907756.09273659.22261218.24883946.22261218.416 0 .16716053-.08353462.3232634-.22261218.416z"/>
        </svg>`;
}