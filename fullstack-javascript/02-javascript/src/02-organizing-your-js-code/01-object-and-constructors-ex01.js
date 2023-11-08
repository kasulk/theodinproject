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

// add function to Book.prototype
Book.prototype.sayHello = function () {
  console.log("hello, I'm a book!");
};
console.log(Book.prototype);
theHobbit.sayHello();

// valueOf() is inherited from Object.prototype.valueOf
console.log(theHobbit.valueOf());

console.log(theHobbit.hasOwnProperty("valueOf"));
console.log(Object.prototype.hasOwnProperty("valueOf"));
console.log(Object.prototype.hasOwnProperty("hasOwnProperty"));
