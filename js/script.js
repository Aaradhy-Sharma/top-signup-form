const firstPressBtn = document.querySelector('[data-firstbtn]');
const buttoncon = document.querySelector('.buttoncon');
const formbox = document.querySelector('[data-form-box]');


function handleFirstPress() {
    console.log('First Pressed');
    firstPressBtn.classList.add('invis');
    formbox.classList.remove('invis');
    buttoncon.style.zIndex = '-2';


}

firstPressBtn.addEventListener('click', handleFirstPress);

console.log('script loaded');