//Select DOM
const sign = document.querySelector('.login_up');
const sign_in = document.querySelector('.container_signIn');
const sign_up = document.querySelector('.container_singUp');
const back = document.querySelector('.back');
//Events

sign.addEventListener('click', () => {
    sign_in.style.display = 'none';
    sign_up.style.display = 'flex';
})

back.addEventListener('click', () => {
    sign_in.style.display = 'flex';
    sign_up.style.display = 'none';
})