// main.js
import { BookCollection } from './modules/bookCollection.js';
import { initializeSPA } from './modules/singlePage.js';
import { displayTime } from './modules/date.js';

const bookCollection = new BookCollection();
bookCollection.addBook();

initializeSPA();
displayTime();