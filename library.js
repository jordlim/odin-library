const library = [
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    if (read == True)
        return this.title+" by "+this.author+", "+pages+" pages, " +"read";
    else
        return this.title+" by "+this.author+", "+pages+" pages, " +"not read";
  }
}



function render() {

  // Test book
  const book = new Book("Test", "Test", 0, "yes");
  library.push(book);

  let books = document.getElementsByClassName("books");

  
  // books[0].style.backgroundColor = "red";

  console.log(books);
  for (var b of library) {
    const newBook = document.createElement("div");
    newBook.classList.add("book");

    const titleSpan = document.createElement("span");
    titleSpan.innerHTML = b.title;
    titleSpan.id = "title";
    newBook.appendChild(titleSpan);

    const authorSpan = document.createElement("span");
    authorSpan.innerHTML = b.author;
    authorSpan.id = "author";
    newBook.appendChild(authorSpan);
    
    const pagesSpan = document.createElement("span");
    pagesSpan.innerHTML = b.pages + " pages";
    pagesSpan.id = "pages";
    newBook.appendChild(pagesSpan);

    const readSpan = document.createElement("span");
    readSpan.innerHTML = b.read;
    readSpan.id = "read";
    newBook.appendChild(readSpan);
    
    // Used getElementsByClassName -> books is an array
    books[0].appendChild(newBook);
  }
}

function addBook() {
  // do stuff here
}

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});


render();