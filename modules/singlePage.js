// spa.js
export default function initializeSPA() {
  const listBook = document.querySelector('.link-list');
  const newBook = document.querySelector('.link-new');
  const contact = document.querySelector('.link-contact');

  const section1 = document.querySelector('.section-1');
  const section2 = document.querySelector('.section-2');
  const section3 = document.querySelector('.section-3');

  const logo = document.querySelector('.logo');

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
}
