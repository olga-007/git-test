const myLibrary = [];

function Book(title, author, numPages, isRead = false) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.isRead = isRead;

    this.info = function info() {
        return `${title} by ${author}, ${numPages} pages, ${isRead ? 'already read' : 'not read yet'}`;
    };
}

const bookList = document.getElementById('book-list');
const newBookForm = document.getElementById('new-book-form');

function updateBookList() {
    while (bookList.firstChild) {
        bookList.removeChild(bookList.firstChild);
    }
    myLibrary.forEach((book) => {
        const bookInfo = document.createElement('div');
        bookInfo.classList.add('book');
        bookInfo.innerText = book.info();
        bookList.appendChild(bookInfo);
    });
}

function addBookToLibrary(title, author, numPages, isRead) {
    myLibrary.push(new Book(title, author, numPages, isRead));
    updateBookList();
}

newBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const numPages = document.getElementById('pages').value;
    const isRead = document.getElementById('read').checked;
    addBookToLibrary(title, author, numPages, isRead);
});

// pre-populate the library
for (let i = 1; i <= 5; i++) {
    addBookToLibrary(`Title${i}`, `Author${i}`, 100 * i);
}
