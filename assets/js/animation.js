const cover = document.querySelector('.cover');
const playlist = document.querySelector('.playlist');
const btn_list = document.querySelector('[data-list]');
let covered = false;

cover.addEventListener('click', operPlaylist);
btn_list.addEventListener('click', operPlaylist);

function operPlaylist(event) {
    playlist.classList.toggle('playlist-closing');
    cover.style.display = covered ? '' : 'none';
    covered = !covered;
}