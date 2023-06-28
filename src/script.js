import Book from "./Book.js";

let library = [];

const form = document.querySelector("form");

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    let newBook = new Book(event.target.title.value, event.target.author.value, event.target.image.value);
    library.push(newBook);
    newBook.cardCreation();
    form.reset();
});


