let audio = new Audio();
const timerInput = document.getElementById("timer");
const controllers = document.querySelectorAll('[data-control]');
let changing = false;
let playing = false;

window.addEventListener('keypress', keyPressed);

audio.addEventListener('timeupdate', updateTime);
audio.addEventListener('playing', ()=>{
    playIconUpdate(true);
});
audio.addEventListener('pause', ()=>{
    playIconUpdate(false);
});

timerInput.addEventListener('change', change);
timerInput.addEventListener('mousedown', ()=>{
    changing = true;
});
timerInput.addEventListener('mouseup', ()=>{
    changing = false;
});

controllers.forEach((controller)=>{
    controller.addEventListener('click', control);
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
        playing = true;       
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

/**
 * Gerencia os controles do player
 * @param {MouseEvent} event 
 */
function control(event) {
    let btn = event.currentTarget;

    switch (btn.dataset.control) {
        case 'play':
            playMusic(btn);
            break;
        case 'next':
            console.log('seguinte');
            break;
        case 'previous':
            console.log('anterior');
            break;
    }
}
/**
 * 
 * @param {HTMLButtonElement} playButton 
 */
function playMusic(playButton) {

    if (playButton instanceof HTMLButtonElement) {
        // console.log('é');
        playButton.blur();
    }

    if (audio.paused) {
        playButton.disabled = true;
        audio.play().finally(()=>{
            playButton.disabled = false
        });
    } else {
        audio.pause();
    }

}
/**
 * 
 * @param {KeyboardEvent} event 
 */
function keyPressed(event) {
    switch (event.code) {
        case 'Space': playMusic({}); break;
    }
}
function activeSong() {
    let active = musicList.querySelector('.active');

    if(!musicList.childElementCount) {
        console.log(musicList.childElementCount);
        return;
    };

    if (active) {
        let next = active.nextSibling;

        if (next) {
            next.classList.add('active');
        } 

        active.classList.remove('active');
    }else{
        musicList.firstElementChild.classList.add('active');
    }
}