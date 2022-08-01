let audio = new Audio();
const timerInput = document.getElementById("timer");

audio.addEventListener('timeupdate', updateTime);
/**
 * Reproduz a música selecionanda
 * @param {MouseEvent} event 
 */
function player(event) {
    release();  
    let li = event.target.closest('li');
    let musicPath = li.dataset.musicUrl;
    audio.src = musicPath;// 'assets/js/music.mp3';
    // audio.onplaying = ()=> updateTime()

    audio.play()
    .then(()=>{
        // console.log(_);
        timerInput.max = audio.duration;
        timerInput.value = 0;        
    })
    .catch((error)=>alert(`Não foi possível reproduzir o ficheiro 😥${musicPath}\n${error}`));
}
/**
 * Libera os recursos utilizados
 */
function release() {
    audio.pause();
    audio.src = '';
    // audio.onplaying = null;
    // audio = null;
}
/**
 * Actualiza o temporizador
 */
function updateTime () {
    timerInput.value = audio.currentTime;
    // console.log("teste");

    // if(!audio.paused)
    //     updateTime();
}