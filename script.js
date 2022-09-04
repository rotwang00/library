let myLibrary = [];
let bookCount = 0;
const cards = document.getElementById('cards');

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.bookNumber = bookCount;
    bookCount++;
  }

  toggleRead() {
    this.read = !this.read;
    updateDisplay();
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function newBook(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  addBookToLibrary(book);
}

function updateDisplay() {
  // Remove all child nodes
  while (cards.firstChild) {
    cards.removeChild(cards.lastChild);
  }

  // Add all books to DOM
  for (let book of myLibrary) {
    const newCard = document.createElement('div');

    const newTitle = document.createElement('p');
    newTitle.classList.add('title');
    const newAuthor = document.createElement('p');
    newAuthor.classList.add('author');
    const newPages = document.createElement('p');
    newPages.classList.add('pages');
    const read = document.createElement('p');
    read.classList.add('read');
    const readButton = document.createElement('button');
    readButton.classList.add('readButton');

    newTitle.textContent = book.title;
    newAuthor.textContent = book.author;
    newPages.textContent = book.pages;
    book.read
      ? (read.textContent = 'Already read')
      : (read.textContent = 'Not read yet');
    readButton.textContent = 'Read?';

    // Toggle read status
    readButton.addEventListener('click', function (e) {
      let index = parseInt(e.path[1].attributes[0].nodeValue);
      myLibrary[index].toggleRead();
    });

    newCard.appendChild(newTitle);
    newCard.appendChild(newAuthor);
    newCard.appendChild(newPages);
    newCard.appendChild(read);
    newCard.appendChild(readButton);

    newCard.dataset.index = `${book.bookNumber}`;

    newCard.classList.add('card');

    cards.appendChild(newCard);
  }
}

newBook('Dune', 'Herbert', 700, true);
newBook('It', 'King', 600, true);
newBook('Gardens of the Moon', 'Erikson', 1000, false);
newBook('Count', 'Dumas', 800, true);

console.log(myLibrary);
updateDisplay();
