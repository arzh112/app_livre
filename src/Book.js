class Book {
    constructor(title, author, image) {
        this.title = title;
        this.author = author;
        this.image = image;
    }
    
    cardCreation() {
        
        const row = document.querySelector(".row");
        
        let column = document.createElement("div");
        column.classList.add("col-3");
        column.classList.add("mb-3");
        row.append(column);
        
        let card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("h-100");
        column.append(card);

        let newPicture = document.createElement("img");
        newPicture.classList.add("card-img-top");
        newPicture.classList.add("image-fluid");
        newPicture.classList.add("h-75");
        card.append(newPicture);
        newPicture.src = this.image;

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        card.append(cardBody);

        let newTitle = document.createElement("h5");
        newTitle.classList.add("card-title");
        cardBody.append(newTitle);
        newTitle.textContent = this.title;

        let newAuthor = document.createElement("p");
        newAuthor.classList.add("card-title");
        cardBody.append(newAuthor);
        newAuthor.textContent = this.author;
        
        let deleteBtn = document.createElement("button"); // Bouton pour supprimer la carte
        deleteBtn.classList.add("deleteBtn");
        deleteBtn.classList.add("btn");
        deleteBtn.classList.add("btn-success");
        cardBody.append(deleteBtn);
        deleteBtn.textContent = "Supprimer";
        deleteBtn.addEventListener('click', function() { 
            column.remove(); 
        });
        
    }
}

export default Book;