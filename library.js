const library = [
  new Book("Essentialism: The Disciplined Pursuit of Less", "Greg McKeown", 304, "yes")
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
  // Clear all books before rendering
  books[0].textContent = "";

  // Reset IDs for buttons
  let id = 0;
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
  
    const markRead = document.createElement("button");
    markRead.innerHTML = "Read?";
    markRead.id = "markRead";
    newBook.appendChild(markRead);

    const removeBook = document.createElement("button");
    removeBook.innerHTML = "X";
    removeBook.classList.add("removeBook");
    removeBook.dataset.id = id;
    newBook.appendChild(removeBook);

    // Used getElementsByClassName -> books is an array
    books[0].appendChild(newBook);

    // Increment ID to associate DOM elements to book objects
    id += 1;
  }
}

// const remove = document.querySelector(".removeBook");
// remove.addEventListener("click", () => {
//   console.log("clicked");
//   library.splice(remove.dataset.id, 1);

//   render();
// });



function addBook(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  library.push(newBook);

  render();
}

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const submitButton = document.querySelector("dialog button");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

let form = document.getElementById("book_form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  

  let titleField = form.elements['f_title'];
  let title = titleField.value;

  let authorField = form.elements['f_author'];
  let author = authorField.value;

  let pagesField = form.elements['f_pages'];
  let pages = pagesField.value;

  let readField = form.elements['f_read'];
  let read = readField.checked;
  if (read)
    read = "yes";
  else
    read = "no";

  addBook(title, author, pages, read);

  form.reset();

  dialog.close();
});

render();