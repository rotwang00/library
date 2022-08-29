let myLibrary = [];
const cards = document.getElementById('cards');

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  toggleRead() {
    this.read = !this.read;
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

  // Add all books
  for (let book of myLibrary) {
    const newCard = document.createElement('div');
    const newTitle = document.createElement('h4');
    const newAuthor = document.createElement('h4');
    const newPages = document.createElement('h5');
    const read = document.createElement('h5');

    newTitle.textContent = book.title;
    newAuthor.textContent = book.author;
    newPages.textContent = book.pages;
    book.read
      ? (read.textContent = 'Already read')
      : (read.textContent = 'Not read yet');

    newCard.appendChild(newTitle);
    newCard.appendChild(newAuthor);
    newCard.appendChild(newPages);
    newCard.appendChild(read);

    newCard.classList.add('card');

    cards.appendChild(newCard);

    // <h4>Dune</h4>
    //     <h4>Herbert</h4>
    //     <h5>700 pages</h5>
    //     <h5>Not read</h5>
    //     <button>Read</button>
    //     <button>Remove</button>
  }
}

newBook('Dune', 'Herbert', 700, true);
newBook('It', 'King', 600, true);
newBook('Gardens of the Moon', 'Erikson', 1000, false);

console.log(myLibrary);
updateDisplay();

newBook('Count', 'Dumas', 800, true);
setTimeout(updateDisplay, 3000);
