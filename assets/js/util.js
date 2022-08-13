const controller = document.getElementsByClassName('controller')[0];
const resultList = document.getElementsByClassName('search-popup-result')[0];
const musicList = document.querySelector('.music-list>ul');
const modal = document.querySelector('.modal[data-modal]');

modal.querySelector('[data-modal-close]').addEventListener('click', ()=>{
    modal.classList.remove('animate');
    setTimeout(()=>{
        modal.dataset.modal = '';
    }, 500);
});

document.querySelectorAll('[data-info]').forEach(
    (link)=>{
        link.addEventListener('click', ()=>{
            modal.dataset.modal = link.dataset.info;
            modal.getElementsByClassName('title')[0].innerText = link.dataset.info;

            setTimeout(()=>{
                modal.classList.add('animate');
            },100);
        });
    }
);