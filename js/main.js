// Burger Menu
const burgerBtnOpen = document.querySelector('.burger-btn-open');
const burgerBtnClose = document.querySelector('.burger-btn-close');
const headerMenu = document.querySelector('.header-menu')
const burgerBackground = document.querySelector('.burger-background');

burgerBtnOpen.addEventListener('click', () => {
  burgerBtnOpen.classList.add('burger-open-active');
  burgerBtnClose.classList.add('burger-close-active');
  headerMenu.classList.add('menu-active');
  burgerBackground.classList.add('burger-open');
});
burgerBtnClose.addEventListener('click', () => {
  burgerBtnOpen.classList.remove('burger-open-active');
  burgerBtnClose.classList.remove('burger-close-active');
  headerMenu.classList.remove('menu-active');
  burgerBackground.classList.remove('burger-open');
});