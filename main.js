let myLibrary = []

function Book(title, author, pages, status) {
    const id = Math.floor(Math.random() * 1000);

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.id = id;
}

function addBookToLibrary(book) {
    myLibrary.push(book);

    displayBooks();
    clearFields();
}

function displayBooks() {
    const tbody = document.querySelector('#bookRow');
    tbody.querySelectorAll('tr').forEach(el => el.remove());

    myLibrary.forEach(book => {
        createRow(book)
    })
}

function createRow(book) {
    const tbody = document.querySelector('#bookRow');
    const row = document.createElement('tr');

    if (book.status === 'true') {
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td>Read</td>
        <td id="delete">Delete</td>
    `
    } else {
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td>Not Read</td>
        <td id="delete">Delete</td>
    `
    }



    row.classList.add(`${book.id}`)
    tbody.appendChild(row);
}

function deleteBook(id) {
    myLibrary.forEach((book, i) => {
        if (book.id == id) {
            myLibrary.splice(i, 1);
        }
    })

    displayBooks();
}

function changeStatus(id) {
    myLibrary.forEach((book, i) => {
        if (book.id == id) {
            if (book.status === 'true') {
                book.status = 'false'
            } else {
                book.status = 'true'
            }
        }
    })

    displayBooks();
}

function clearFields() {
    document.querySelector('#bookTitle').value = '';
    document.querySelector('#bookAuthor').value = '';
    document.querySelector('#bookPages').value = '';
}

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();

    //Create a new book
    const title = document.querySelector('#bookTitle').value;
    const author = document.querySelector('#bookAuthor').value;
    const pages = document.querySelector('#bookPages').value;
    const status = document.querySelector('input[name="readStatus"]:checked').value;

    const book = new Book(title, author, pages, status);

    //Add new book to library
    addBookToLibrary(book);
})

document.querySelector('table').addEventListener('click', e => {
    if (e.target.textContent === 'Delete') {
        const id = e.target.parentElement.className;
        deleteBook(id);
    }

    if (e.target.textContent === 'Read' || e.target.textContent === 'Not Read') {
        const id = e.target.parentElement.className;
        changeStatus(id);
    }

})