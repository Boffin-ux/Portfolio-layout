const tabs = () => {
   const designList = document.querySelector('.design-list');
   const getTabs = document.querySelectorAll('.design-list__item');
   const tabsDescription = document.querySelectorAll('.design__descr');
   const designBlock = document.querySelectorAll('.design-block > img');
   const designImg = document.querySelectorAll('.design-images');
   const designTitle = document.querySelectorAll('.design__title');

   let activeTarget = '';

   const activeTab = e => {
      e.preventDefault();
      const target = e.target;
      const activeBlock = selector => {
         selector.forEach(item => {
            item.dataset.tabsField === activeTarget ?
               item.classList.remove('hidden') :
               item.classList.add('hidden');
         });
      };
      if (target.closest('.design-list__item') && !target.closest('.design-list__item_active')) {
         getTabs.forEach(item => item.classList.remove('design-list__item_active'));
         target.classList.add('design-list__item_active');
         activeTarget = target.dataset.tabsHandler;
         designTitle.forEach((item, index) => {
            if (index === [...getTabs].indexOf(target)) {
               item.classList.remove('hidden');
               document.querySelector("title").textContent = item.textContent;
            } else {
               item.classList.add('hidden');
            }
         });

         activeBlock(tabsDescription);
         activeBlock(designImg);
         activeBlock(designBlock);
      }
   };

   designList.addEventListener('click', activeTab);
};

export default tabs;