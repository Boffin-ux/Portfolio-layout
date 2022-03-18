const clearForm = (inputs, sendMessage, modal) => {
   inputs.forEach(item => item.value = '');
   sendMessage ? sendMessage.remove() : false;
   modal ? modal() : false;
};
export default clearForm;