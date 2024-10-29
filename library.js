const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    if (read == True)
        return this.title+" by "+this.author+", "+pages+" pages, " +"read"
    else
        return this.title+" by "+this.author+", "+pages+" pages, " +"not read"
  }
}

function addBookToLibrary() {
  // do stuff here
}