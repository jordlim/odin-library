const library = [
  new Book("Test", "Test", 0, "yes")
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


let books = document.getElementsByClassName("books");

function render() {
  for (var b of library) {
    console.log(b);

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

function addBook(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  library.push(newBook);
  books[0].textContent = "";
  render();
}

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const submitButton = document.querySelector("dialog button");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

submitButton.addEventListener("click", () => {
  let title = document.getElementById('title');
  console.log(title);
  let author = document.getElementById('author');
  let pages = document.getElementById('pages');
  let read = document.getElementById('read');
  addBook(title, author, pages, read);
  
  dialog.close();
});


render();