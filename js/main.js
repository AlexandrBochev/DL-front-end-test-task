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

// Animation
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            }else{
                if (!animItem.classList.contains('_anim-no-hide')) {
                animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, Left: rect.Left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll();
    }, 3000);
}

// Mountains Choose your present
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