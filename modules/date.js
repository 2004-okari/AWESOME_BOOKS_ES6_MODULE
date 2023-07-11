import { DateTime } from './luxon.js';

const displayTime = () => {
  const date = document.querySelector('.date-info');

  const updateTime = () => {
    const now = DateTime.now();
    const formattedTime = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
    date.innerHTML = formattedTime;
  };
  updateTime();
  setInterval(updateTime, 1000);
};

export default displayTime;
