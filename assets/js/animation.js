const cover = document.querySelector('.cover');
const playlist = document.querySelector('.playlist');
const btn_list = document.querySelector('[data-list]');

cover.addEventListener('click', openPlaylist);
btn_list.addEventListener('click', openPlaylist);
window.addEventListener('load', () => {
    cover.style.display = playlist.classList.contains('playlist-closed') ? 'none' : '';
});

function openPlaylist(event) {
    playlist.classList.toggle('playlist-closed');
    cover.style.display = playlist.classList.contains('playlist-closed') ? 'none' : '';
}