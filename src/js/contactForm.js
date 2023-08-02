import Notiflix from 'notiflix';

const form = document.querySelector(".contact__form");
const input = document.querySelectorAll(".contact__input");
const textarea = document.querySelector(".contact__input-area")

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    Notiflix.Notify.success(
        'Наш менеджер вскоре с вами свяжется!',
        {
            timeout: 4000,
            borderRadius: '35px',
            fontSize: '16px',
            width: '300px',
            fontFamily: 'Raleway'
        }
    );
    
    const inputs = Array.from(input);
    inputs.map(i => i.value = '')
    textarea.value = '';
}