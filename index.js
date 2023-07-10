/* eslint-disable no-use-before-define */
/* eslint-disable max-classes-per-file */
/* eslint-disable-line no-unused-vars */
  
  const bookCollection = new BookCollection();
  bookCollection.addBook();
  
  // Modify to make it a Single Page Application
  
  const listBook = document.querySelector('.link-list');
  const newBook = document.querySelector('.link-new');
  const contact = document.querySelector('.link-contact');
  
  const section1 = document.querySelector('.section-1');
  const section2 = document.querySelector('.section-2');
  const section3 = document.querySelector('.section-3');
  
  const logo = document.querySelector('.logo');
  
  const dateInfo = document.querySelector('.date-info');
  
  const seperator = document.querySelector('.seperator');
  
  listBook.addEventListener('click', () => {
    section1.style.display = '';
    section1.style.paddingBottom = '50px';
    section2.style.display = 'none';
    section3.style.display = 'none';
    seperator.style.display = 'none';
    logo.innerHTML = 'Awesome Books';
  });
  
  newBook.addEventListener('click', () => {
    section1.style.display = 'none';
    section2.style.display = '';
    section2.style.paddingTop = '160px';
    section3.style.display = 'none';
    logo.innerHTML = 'Add Book';
  });
  
  contact.addEventListener('click', () => {
    section1.style.display = 'none';
    section2.style.display = 'none';
    section3.style.display = '';
    section3.style.paddingTop = '160px';
    logo.innerHTML = 'Contact';
  });
  
  // Add date to page
  
  const d = new Date();
  const year = d.getFullYear();
  let date = d.getDate();
  const month = d.getMonth();
  const hour = d.getHours();
  const minute = d.getMinutes();
  const second = d.getSeconds();
  let ampm;
  
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  if (date === 1 || date === 21 || date === 31) {
    date = `${date}st`;
  } else if (date === 2 || date === 22) {
    date = `${date}nd`;
  } else {
    date = `${date}th`;
  }
  
  if (hour < 12) {
    ampm = 'am';
  } else {
    ampm = 'pm';
  }
  
  dateInfo.innerHTML = `${months[month]} ${date} ${year}, ${hour}:${minute}:${second}${ampm}`;