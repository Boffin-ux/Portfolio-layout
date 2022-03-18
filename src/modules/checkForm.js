import postData from "./postData.js";
import clearForm from "./clearForm.js";

const checkForm = async (e, form, inputs, modal) => {
   e.preventDefault();
   let orderMessage = document.querySelector('.order-message');
   if (!orderMessage) {
      const addMessage = `<span class="order-message"><span>`;
      form.insertAdjacentHTML('beforeEnd', addMessage);
      orderMessage = document.querySelector('.order-message');
      orderMessage.style.display = "block";
      orderMessage.style.textAlign = "center";
      orderMessage.style.fontSize = "20px";
      orderMessage.style.padding = "25px";
   }
   const checkInput = () => {
      return inputs.every(item => item.value !== '');
   };
   if (checkInput()) {
      await postData();
      orderMessage.classList.add('active');
      orderMessage.textContent = `Заявка успешно отправлена!`;
      setTimeout(() => {
         clearForm(inputs, orderMessage, modal);
      }, 2000);
   } else {
      orderMessage.textContent = `Заполните все поля!`;
      orderMessage.classList.add('active');
   }
};
export default checkForm;