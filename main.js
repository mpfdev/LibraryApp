const submitList = document.querySelector('#bookList');

let myLibrary = [];

function clearFields() {
    document.querySelector('#bookName').value = '';
    document.querySelector('#bookAuthor').value = '';
    document.querySelector('#bookPages').value = '';
    document.querySelector('#bookIsRead').selectedIndex = null;
}

function Book(title, author, pages, isRead, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.id = id;
}

function addBookToLibrary(book) {
    myLibrary.push(book);

    const tBody = document.querySelector('#bookRow');

    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td><button class="btn btn-outline-info">${book.isRead === 'true' ? 'Read' : 'Not Read'}</button></td>
        <td><button class="btn btn-danger delete">Delete</button></td>
    `

    row.classList.add(`${book.id}`);

    tBody.appendChild(row);
}

function createBook() {
    const id = Math.floor(Math.random() * 10000);

    const bookTitle = document.querySelector('#bookName').value;
    const bookAuthor = document.querySelector('#bookAuthor').value;
    const bookPages = document.querySelector('#bookPages').value;
    const bookIsRead = document.querySelector('#bookIsRead').value;
    const book = new Book(bookTitle, bookAuthor, bookPages, bookIsRead, id);

    clearFields();

    return book;
}

function deleteBook(target) {
    if (target.classList.contains('delete')) {
        target.parentElement.parentElement.remove();
    }
}

function changeStatus(target) {
    console.log(target.parentElement);
}


submitList.addEventListener('submit', e => {
    e.preventDefault();

    const newBook = createBook();
    addBookToLibrary(newBook);

})

document.querySelector('#bookRow').addEventListener('click', e => {
    deleteBook(e.target);

    changeStatus(e.target);

    console.log(myLibrary);
})