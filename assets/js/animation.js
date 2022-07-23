const cover = document.querySelector('.cover');
const playlist = document.querySelector('.playlist');
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

function openPlaylist(event) {
    playlist.classList.toggle('playlist-closed');
    cover.style.display = playlist.classList.contains('playlist-closed') ? 'none' : '';
}

function hideController() {
    controller.classList.add(controllerHideClassName);
}