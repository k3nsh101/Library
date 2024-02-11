const container = document.querySelector('.container');
const dialog = document.querySelector('dialog');
const formAddBook = document.querySelector('form');

let btnRemove;
let btnRead;

const myLibrary = [];

// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read');
book_1 = new Book('Little Women', 'Louisa May Alcott', 528, 'Not Read');
book_2 = new Book('The Book Thief', 'Markus Zusak', 592, 'Not Read');
book_3 = new Book('The Hunger Games', 'Suzanne Collins', 374, 'Not Read');
book_4 = new Book('1984', 'George Orwell', 368, 'Not Read');
book_5 = new Book('To Kill a Mockingbird', 'Harper Lee', 323, 'Not Read');

myLibrary.push(book_1)
myLibrary.push(book_2)

function Book(title, author, numOfPages, isRead){
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.isRead = isRead;

    this.info = function(){
        return `The ${this.title} by ${this.author}, ${this.numOfPages} pages, ${this.read} yet`;
    }
}

formAddBook.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const numPages = document.querySelector('#num-pages').value;
    let isRead = document.querySelector('#is-read').value;

    if (isRead === 'no') {
        isRead = 'Not Read'
    }
    else if (isRead === 'yes'){
        isRead = 'Read'
    }

    const book = new Book(title, author, numPages, isRead);

    myLibrary.push(book);

    const startIndex = document.querySelectorAll('.card').length;
    displayLibrary(startIndex);

    dialog.close();
})

function displayLibrary(startIndex = 0){
    for (let i = startIndex; i < myLibrary.length; i++){
        let card = document.createElement('div');
        card.classList.add('card', `index_${i}`);
        let title = document.createElement('div');
        title.textContent = myLibrary[i].title;
        title.classList.add('title');

        let author = document.createElement('div');
        author.textContent = myLibrary[i].author;
        author.classList.add('author');
        
        let numPages = document.createElement('div');
        numPages.textContent = myLibrary[i].numOfPages;
        numPages.classList.add('num-pages');
        
        let isRead = document.createElement('div');
        isRead.textContent = myLibrary[i].isRead;
        isRead.classList.add('is-read');

        let options = document.createElement('div');
        options.classList.add('options');

        let read = document.createElement('button');
        read.classList.add('btn-read');
        read.textContent = 'Read';

        let removeBook = document.createElement('button');
        removeBook.classList.add('removeBook');
        removeBook.textContent = 'Remove';
        
        container.appendChild(card);

        card.append(title, author, numPages, isRead, options);
        options.append(read, removeBook)
    }
    
    btnRemove = document.querySelectorAll('.removeBook');
    addRemoveBook(btnRemove);

    btnRead = document.querySelectorAll('.btn-read');
    addToggleRead(btnRead);
}

displayLibrary();

function addRemoveBook(btnRemove) {
    btnRemove.forEach((value) => {
        value.addEventListener("click", (event) => {
            element = event.target.parentElement.parentElement
            removeBook(element);
            element.remove()
        })
    })
}

function removeBook(element){
    const index = element.classList[1].slice(-1)
    myLibrary.splice(index, 1)
}

function addToggleRead(btnRead){
    btnRead.forEach((value) => {
        value.addEventListener("click", (event) => {
            parentElement = event.target.parentElement.parentElement
            element = parentElement.querySelector('.is-read')
            toggleRead(element);
        })
    })
}

function toggleRead(element){
    if (element.textContent === 'Not Read') {
        element.textContent = 'Read'
    }
    else if (element.textContent === 'Read') {
        element.textContent = 'Not Read'
    }
}