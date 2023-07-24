const firstPressBtn = document.querySelector('[data-firstbtn]');
const buttoncon = document.querySelector('.buttoncon');
const formbox = document.querySelector('[data-form-box]');
const music = document.querySelector('[data-music]');
const darkmodebtn = document.querySelector('[data-darkmodebtn]');
const datasubmit = document.querySelector('[data-submit]');
const password = document.querySelector('[data-password]');
const confirm_password = document.querySelector('[data-confirm-password]');
const phone_number_error = document.getElementById('phonenumbererror');
const phone_number = document.getElementById('phone-number');
let musicOn = true;
let darkmodeOn = false;

function handleFirstPress() {
  console.log('First Pressed');
  firstPressBtn.classList.add('invis');
  formbox.classList.remove('invis');
  buttoncon.style.zIndex = '-2';
}

firstPressBtn.addEventListener('click', handleFirstPress);

const musicbtn = document.querySelector('[data-music-btn]');
musicbtn.addEventListener('click', handleMusicBtn);

function handleMusicBtn() {
  console.log('music btn pressed');
  musicOn = !musicOn;
  if (musicOn) {
    musicbtn.textContent = 'music: off';
    music.pause();
  } else {
    musicbtn.textContent = 'music: on';
    music.play();
  }
}

datasubmit.addEventListener('click', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  console.log('submit pressed');
  if (validatePassword()) {
    disableSubmit();
    document.getElementById('form').submit();
  }
}

function validatePassword() {
  const confirmPasswordError = document.getElementById('confirmPasswordError');
  if (password.value !== confirm_password.value) {
    confirmPasswordError.classList.add('error-message-true');
    confirmPasswordError.classList.remove('error-message');
    confirmPasswordError.textContent = 'Passwords do not match';
    return false;
  } else {
    confirmPasswordError.classList.remove('error-message-true');
    confirmPasswordError.classList.remove('error-message');
    confirmPasswordError.textContent = '';
    return true;
  }
}

function disableSubmit() {
  datasubmit.textContent = 'submitted';
  datasubmit.style.backgroundColor = 'green';
  datasubmit.style.color = 'white';
  datasubmit.style.border = 'none';
  datasubmit.style.cursor = 'default';
  datasubmit.setAttribute('disabled', 'disabled');
  datasubmit.style.opacity = '0.5';
  datasubmit.style.boxShadow = 'none';
  datasubmit.style.outline = 'none';
}




console.log('script loaded');
