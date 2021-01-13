const burgerButton = document.querySelector('.menu-burger-btn');
const menu = document.querySelector('.menu');
const span1 = document.querySelector('.span1');
const span2 = document.querySelector('.span2');
const span3 = document.querySelector('.span3');
const headerTitle = document.querySelector('.wrapper__main-page');

const menuHandler = () => {
  const checkClass = menu.classList.contains('menu-show');

  if (checkClass) {
    menu.classList.remove('menu-show');
    span1.classList.remove('span1-add');
    span2.classList.remove('span2-add');
    span3.classList.remove('span3-add');
    headerTitle.classList.remove('header-title-show');
    headerTitle.classList.add('wrapper__main-page');

    return;
  }
  menu.classList.add('menu-show');
  headerTitle.classList.add('header-title-show');
  headerTitle.classList.remove('wrapper__main-page');
  span1.classList.add('span1-add');
  span2.classList.add('span2-add');
  span3.classList.add('span3-add');
};
burgerButton.addEventListener('click', menuHandler);
