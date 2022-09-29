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