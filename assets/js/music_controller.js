let audio = new Audio();
const timerInput = document.getElementById("timer");
let changing = false;

audio.addEventListener('timeupdate', updateTime);
timerInput.addEventListener('change', change);
timerInput.addEventListener('mousedown', ()=>{
    changing = true;
});
timerInput.addEventListener('mouseup', ()=>{
    changing = false;
});
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
    timerInput.min = 0;
    timerInput.max = 0;
    timerInput.value = 0;
    // audio.onplaying = null;
    // audio = null;
}
/**
 * Actualiza o temporizador
 */
function updateTime () {
    if(!changing)
    timerInput.value = audio.currentTime;
    // console.log("teste");

    // if(!audio.paused)
    //     updateTime();
}
/**
 * Altera o tempo de actual da música 
 * movendo o timer
 * @param {Event} event 
 */
function change(event) {
    audio.currentTime = event.target.value;
    // changing = true;
}