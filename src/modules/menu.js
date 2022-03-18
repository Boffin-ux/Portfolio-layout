const menu = () => {
   const humburgerMenu = document.querySelector('.humburger-menu');
   const menu = document.querySelector('.menu');

   const openMenu = () => {
      menu.style.top = '0';
      document.addEventListener('click', closeMenu);
   };
   const closeMenu = e => {
      if (!e.target.closest('.menu-list') && !e.target.closest('.humburger-menu') || e.target.closest('.menu-list__item')) {
         menu.style.top = '-300px';
         document.removeEventListener('click', closeMenu);
      }
   };
   humburgerMenu.addEventListener('click', openMenu);
};

export default menu;