import { disableScroll, enableScroll } from "./blockScrolled.js";
import checkForm from "./checkForm.js";
import clearForm from "./clearForm.js";

const modal = () => {
   const getModal = document.querySelector('.modal');
   const mainButton = document.querySelector('.main__button');
   const modalInputs = document.querySelectorAll('.modal__input');
   const form = document.querySelector('.modal__form');

   const closeModal = () => {
      getModal.classList.add('hidden');
      enableScroll();
   };
   const sendForm = async e => {
      await checkForm(e, form, [...modalInputs], closeModal);
   };
   const controlModal = e => {
      const target = e.target;
      if (target.closest('.modal__close') || target.closest('.overlay')) {
         const orderMessage = document.querySelector('.order-message');
         clearForm([...modalInputs], orderMessage, closeModal);
      }
      if (target.closest('.modal__button')) {
         sendForm(e);
      }
   };
   const openModal = e => {
      e.preventDefault();
      disableScroll();
      getModal.classList.remove('hidden');
      getModal.addEventListener('click', controlModal);
   };

   mainButton.addEventListener('click', openModal);
};

export default modal;