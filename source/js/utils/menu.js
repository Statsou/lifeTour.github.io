const menu = function () {
  const breakpoint = window.matchMedia('(max-width:1199px)');

  const mainHeader = document.querySelector('.main-header');
  const mainHeaderContainer = mainHeader.querySelector('.main-header__container');
  const navigation = mainHeaderContainer.querySelector('.main-header__navigation');
  const navToggle = mainHeaderContainer.querySelector('.main-header__navigation-button');
  const menuList = mainHeaderContainer.querySelector('.main-header__menu-list');

  function menuActiveInitital () {
    if (breakpoint.matches &&
      document.querySelector('.main-header') &&
      document.querySelector('.main-header__container') &&
      document.querySelector('.main-header__navigation') &&
      document.querySelector('.main-header__navigation-button') &&
      document.querySelector('.main-header__menu-list')) {

      menuList.classList.add('is-active');
      mainHeaderContainer.classList.add('main-header__container--active');
      navigation.classList.remove('disabled');
      mainHeader.style.position = 'absolute';
      document.querySelector('body').style.overflow = 'visible';

      navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('main-header__navigation-button--active');
        mainHeaderContainer.classList.toggle('main-header__container--active');

        mainHeader.classList.toggle('is-open');
        navigation.classList.toggle('is-open');
        mainHeaderContainer.classList.toggle('main-header__container--white');
        menuList.classList.toggle('is-open');

        if (document.querySelector('body').style.overflow === 'visible') {
          document.querySelector('body').style.overflow = 'hidden';
        } else {
          document.querySelector('body').style.overflow = 'visible';
        }
      });

      navigation.addEventListener('click', () => {
        navToggle.classList.remove('main-header__navigation-button--active');
        mainHeaderContainer.classList.add('main-header__container--active');
        mainHeader.classList.remove('is-open');
        navigation.classList.remove('is-open');
        mainHeaderContainer.classList.remove('main-header__container--white');
        menuList.classList.remove('is-open');
        document.querySelector('body').style.overflow = 'visible';
      });
    }
  }

  function risizeScreen () {
    navToggle.classList.remove('main-header__navigation-button--active');
    mainHeaderContainer.classList.add('main-header__container--active');
    mainHeader.classList.remove('is-open');
    navigation.classList.remove('is-open');
    mainHeaderContainer.classList.remove('main-header__container--white');
    menuList.classList.remove('is-open');
    document.querySelector('body').style.overflow = 'visible';
  }


  menuActiveInitital();

    window.addEventListener('resize', () => {
      if (menuList.classList.contains('is-active')) {
        if (!breakpoint.matches) {
          risizeScreen();
        }
        return;
      } else {
        menuActiveInitital();
      }
    });
};

export {menu};
