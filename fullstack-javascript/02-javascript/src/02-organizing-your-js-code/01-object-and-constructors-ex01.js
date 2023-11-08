function Book(title, author, numPages, isRead) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.isRead = isRead;

  this.info = function () {
    return `${title} by ${author}. ${numPages} pages, ${
      isRead ? "already read" : "not read yet."
    }`;
  };
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tokien", 295, false);

console.log(theHobbit.info());

console.log(Object.getPrototypeOf(theHobbit));
console.log(Book.prototype);
