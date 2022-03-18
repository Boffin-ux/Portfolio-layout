const countTimer = deadline => {

   const getTimer = document.querySelector('.timer__time');

   const getTimeRemaining = () => {
      const dateStop = new Date(deadline),
         dateNow = new Date().getTime(),
         timerRemaining = (dateStop - dateNow) / 1000,
         seconds = Math.floor(timerRemaining % 60),
         minutes = Math.floor((timerRemaining / 60) % 60),
         hours = Math.floor(timerRemaining / 60 / 60);
      return { timerRemaining, hours, minutes, seconds };
   };
   const addZero = num => {
      if (num >= 0 && num <= 9) {
         return `0${num}`;
      } else {
         return num;
      }
   };
   const updateClock = () => {
      const timer = getTimeRemaining();
      if (timer.timerRemaining > 0) {
         getTimer.innerHTML = `${addZero(timer.hours)}:${addZero(timer.minutes)}:${addZero(timer.seconds)}`;
      } else {
         getTimer.textContent = `${'00:00:00'}`;
         clearInterval(idInterval);
      }
   };
   const idInterval = setInterval(updateClock, 1000);
   updateClock();
};

export default countTimer;
