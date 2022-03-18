const accordeon = () => {
   const featureList = document.querySelector('.feature-list');
   const featureLinks = document.querySelectorAll('.feature__link');
   const featureSubs = document.querySelectorAll('.feature-sub');

   const activeItem = e => {
      e.preventDefault();
      const target = e.target;
      if (target.closest('.feature__link') && !target.closest('.feature__link_active')) {
         const getParent = target.closest('.feature__link').parentNode;
         const getLink = getParent.querySelector('.feature__link');
         const getSub = getParent.querySelector('.feature-sub');
         featureLinks.forEach(item => item.classList.remove('feature__link_active'));
         featureSubs.forEach(item => item.classList.add('hidden'));
         getLink.classList.add('feature__link_active');
         getSub.classList.remove('hidden');
      }
   };

   featureList.addEventListener('click', activeItem);
};

export default accordeon;