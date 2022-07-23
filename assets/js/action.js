const searchForm = document.forms[0];

searchForm.addEventListener('submit', submit);

function submit(event) {
    if(searchForm.elements[0].textContent.trim() !== ''){
        event.preventDefault();
        return;
    }


}