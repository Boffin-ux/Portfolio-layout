import { elementScrollIntoView } from "seamless-scroll-polyfill";

const smothScroll = () => {
   const getNav = document.querySelector('.menu-list');
   const mainScroll = document.querySelector('.main__scroll');

   const goSection = target => {
      const getId = target.getAttribute('href').slice(1);
      const getSection = document.getElementById(getId);
      if (getSection) {
         elementScrollIntoView(getSection, { behavior: "smooth", block: "center", inline: "center" });
      }
   };
   const activeLink = (e) => {
      e.preventDefault();
      const target = e.target;
      if (target.closest('.menu-list__item')) {
         const getParent = target.closest('.menu-list__item');
         const getLink = getParent.querySelector('.menu-list__link');
         goSection(getLink);
      }
   };

   getNav.addEventListener('click', activeLink);
   mainScroll.addEventListener('click', e => {
      e.preventDefault();
      goSection(mainScroll);
   });
};
export default smothScroll;