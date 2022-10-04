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

// Animation Bubble Talk
const cloud = document.querySelector('.santa-claus__cloud');
const cloudText = document.querySelector('.cloud-text');

setTimeout(() => {
    cloud.classList.add('cloud_active');
    cloudText.classList.add('cloud_active');
}, 3000);

// Mountains Choose Your Present
const chooseBtnOne = document.querySelector('.choose-btn-1');
const chooseBtnTwo = document.querySelector('.choose-btn-2');
const chooseBtnThree = document.querySelector('.choose-btn-3');
const blockSock = document.querySelector('.block-sock');
const blockCap = document.querySelector('.block-cap');
const blockBag = document.querySelector('.block-bag');

chooseBtnOne.addEventListener('click', (e) => {
    e.preventDefault();
    blockSock.classList.add('article-block-active');
    blockCap.classList.remove('article-block-active');
    blockBag.classList.remove('article-block-active');
    chooseBtnOne.classList.add('mountains__btn_active');
    chooseBtnTwo.classList.remove('mountains__btn_active');
    chooseBtnThree.classList.remove('mountains__btn_active');
});
chooseBtnTwo.addEventListener('click', (e) => {
    e.preventDefault();
    blockSock.classList.remove('article-block-active');
    blockCap.classList.add('article-block-active');
    blockBag.classList.remove('article-block-active');
    chooseBtnOne.classList.remove('mountains__btn_active');
    chooseBtnTwo.classList.add('mountains__btn_active');
    chooseBtnThree.classList.remove('mountains__btn_active');
});
chooseBtnThree.addEventListener('click', (e) => {
    e.preventDefault();
    blockSock.classList.remove('article-block-active');
    blockCap.classList.remove('article-block-active');
    blockBag.classList.add('article-block-active');
    chooseBtnOne.classList.remove('mountains__btn_active');
    chooseBtnTwo.classList.remove('mountains__btn_active');
    chooseBtnThree.classList.add('mountains__btn_active');
});

// Deer Select
const selectHeader = document.querySelector('.select__header');
const selectBody = document.querySelector('.select__body');
const selectBoy = document.querySelector('.select__boy');
const selectGirl = document.querySelector('.select__girl');
const selectBg = document.querySelector('.select__bg');
const selectCurrent = document.querySelector('.select__current');

selectHeader.addEventListener('click', () => {
    selectHeader.classList.add('select__header_active');
    selectBody.classList.add('select__body_active');
    selectBg.classList.add('select__bg_active');
});
selectBg.addEventListener('click', () => {
    selectHeader.classList.remove('select__header_active');
    selectBody.classList.remove('select__body_active');
    selectBg.classList.remove('select__bg_active');
});
selectBoy.addEventListener('click', () => {
    selectHeader.classList.remove('select__header_active');
    selectBody.classList.remove('select__body_active');
    selectBg.classList.remove('select__bg_active');
    selectCurrent.innerHTML = 'Boy'
});
selectGirl.addEventListener('click', () => {
    selectHeader.classList.remove('select__header_active');
    selectBody.classList.remove('select__body_active');
    selectBg.classList.remove('select__bg_active');
    selectCurrent.innerHTML = 'Girl'
});

// Page Slider & Animation Snowflake
const slider = $(".slider");
const snowflake = document.querySelector('.snowflake');

slider.slick({
    speed: 800,
    easing: 'ease',
    vertical: true,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 768,
            settings: "unslick",
        }
    ] 
});

slider.on('wheel', (function(e) {
    e.preventDefault();
    if (e.originalEvent.deltaY < 0) {
        $(this).slick('slickPrev');
        snowflake.classList.remove('snowflake_active');
    } else {
        $(this).slick('slickNext');
        snowflake.classList.add('snowflake_active');
    }
}));
