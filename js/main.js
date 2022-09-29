// Burger Menu
const burgerBtnOpen = document.querySelector('.burger-btn-open');
const burgerBtnClose = document.querySelector('.burger-btn-close');
const burgerBackground = document.querySelector('.burger-background');

burgerBtnOpen.addEventListener('click', () => {
  burgerBackground.classList.add('burger-open');
  burgerBtnOpen.style.scale = '0';
  burgerBtnOpen.style.transition = 'all .4s ease 0s';
  burgerBtnClose.style.scale = '1';
  burgerBtnClose.style.transition = 'all .4s ease .2s';
});
burgerBtnClose.addEventListener('click', () => {
  burgerBackground.classList.remove('burger-open');
  burgerBtnOpen.style.scale = '1';
  burgerBtnOpen.style.transition = 'all .4s ease .2s';
  burgerBtnClose.style.scale = '0';
  burgerBtnClose.style.transition = 'all .4s ease 0s';
});