import checkForm from "./checkForm.js";

const mainForm = () => {
   const formButton = document.querySelector('.form__button');
   const form = document.querySelector('.form-test-drive');
   const getInputs = document.querySelectorAll('.form-test-drive > input');

   const sendForm = async e => {
      await console.log(checkForm(e, form, [...getInputs]));
   };
   formButton.addEventListener('click', sendForm);
};
export default mainForm;