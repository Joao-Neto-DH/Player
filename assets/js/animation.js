const cover = document.getElementsByClassName('cover')[0];
const playlist = document.getElementsByClassName('playlist')[0];
const btn_list = document.querySelector('[data-list]');
const controllerHideClassName = 'controller-closed';
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