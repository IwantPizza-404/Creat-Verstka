const burgerBtn = document.querySelector('.burger_btn');
const nav = document.querySelector('.header-nav');
const body = document.body

burgerBtn.addEventListener('click', burgerHandler);

function burgerHandler(e){
    e.preventDefault();
    nav.classList.toggle('open');
    burgerBtn.classList.toggle('active');
    if (nav.classList.contains('open'))
        body.style.overflow = 'hidden';
    else
        body.removeAttribute('style')
}