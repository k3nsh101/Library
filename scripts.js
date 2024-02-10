// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read');

const container = document.querySelector('.container');
const btnAddBook = document.querySelector('.addBookBtn');
const dialog = document.querySelector('dialog');
const closeButton = document.querySelector("form + button");
const form = document.querySelector('form');
// let btnRemove;

const myLibrary = [];

book_1 = new Book('Little Women', 'Louisa May Alcott', 528, 'Not Read');
book_2 = new Book('The Book Thief', 'Markus Zusak', 592, 'Not Read');
book_3 = new Book('The Hunger Games', 'Suzanne Collins', 374, 'Not Read');
book_4 = new Book('1984', 'George Orwell', 368, 'Not Read');
book_5 = new Book('To Kill a Mockingbird', 'Harper Lee', 323, 'Not Read');

addBookToLibrary(book_1)
addBookToLibrary(book_2)

btnAddBook.addEventListener('click', () => {
    dialog.showModal();
});

closeButton.addEventListener('click', () => {
    dialog.close()
});

function Book(title, author, numOfPages, isRead){
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.isRead = isRead;

    this.info = function(){
        return `The ${this.title} by ${this.author}, ${this.numOfPages} pages, ${this.read} yet`;
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const numPages = document.querySelector('#numPages').value;
    let isRead = document.querySelector('#isRead').value;

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

function addBookToLibrary(book){
    myLibrary.push(book);
}

function displayLibrary(startIndex = 0){
    for (let i = startIndex; i < myLibrary.length; i++){
        let card = document.createElement('div');
        card.classList.add('card');
        let title = document.createElement('div');
        title.textContent = myLibrary[i].title;
        title.classList.add('title');

        let author = document.createElement('div');
        author.textContent = myLibrary[i].author;
        author.classList.add('author');
        
        let numPages = document.createElement('div');
        numPages.textContent = myLibrary[i].numOfPages;
        numPages.classList.add('numPages');
        
        let isRead = document.createElement('div');
        isRead.textContent = myLibrary[i].isRead;
        isRead.classList.add('isRead');

        let options = document.createElement('div');
        options.classList.add('options');

        // let removeBook = document.createElement('button');
        // removeBook.classList.add('removeBook');
        // removeBook.textContent = 'Remove';

        // let read = document.createElement('button');
        // read.classList.add('read');
        // read.textContent = 'Read';
        
        container.appendChild(card);
        card.append(title, author, numPages, isRead);

        // card.append(title, author, numPages, isRead, options);
        // options.append(removeBook, read)

        // btnRemove = document.querySelectorAll('.removeBook');

        // btnRemove.forEach((value) => {
        //     value.addEventListener("click", (event) => {
        //         event.target.parentElement.parentElement.remove()
        //         console.log(myLibrary)
        //     })
        // })
    }
}

displayLibrary();

