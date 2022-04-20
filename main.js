const submitBtn = document.querySelector('#bookList');


let myLibrary = [];

//The Constructor
function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

//Do stuff
function addBookToLibrary(book) {
    myLibrary.push(book);

    const tBody = document.querySelector('#bookRow');

    const row = document.createElement('tr');

    row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td>
            <button class="btn btn-outline-info">${book.isRead === 'true' ? 'Read' : 'Not Read'}</button>
            </td>
            <td>
            <button class="btn btn-danger">Delete</button>
            </td>
        `

    tBody.appendChild(row);

}

function displayBooks(arrayBooks) {
    arrayBooks.forEach(book => {
        addBookToLibrary(book)
    })
}

function clearField() {
    document.querySelector('#bookName').value = '';
    document.querySelector('#bookAuthor').value = '';
    document.querySelector('#bookPages').value = '';
    document.querySelector('#isRead').selectedIndex = null;
}

//Events
//Page On Load
document.addEventListener('DOMContentLoaded', displayBooks(myLibrary));

//New Entry
submitBtn.addEventListener('submit', (e) => {
    e.preventDefault();

    let bookTitle = document.querySelector('#bookName').value;
    let bookAuthor = document.querySelector('#bookAuthor').value;
    let bookPages = document.querySelector('#bookPages').value;
    let bookIsRead = document.querySelector('#isRead').value;

    //Create new book
    let book = new Book(bookTitle, bookAuthor, bookPages, bookIsRead);

    clearField();

    //Add Book to Library
    addBookToLibrary(book);

    console.log(myLibrary);


})