import "./styles.css";
import { IBook } from "./index.d";
import { createLiElement } from "./utils";

const myLibrary = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    numPages: 295,
    isRead: false,
  },
  {
    title: "Total Recall",
    author: "Arnold Schwarzenegger",
    numPages: 671,
    isRead: true,
  },
];

function Book(
  this: IBook,
  title: string,
  author: string,
  numPages: number,
  isRead: boolean
) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.isRead = isRead;

  // this.info = function () {
  //   return `${title} by ${author}. ${numPages} pages, ${
  //     isRead ? "already read" : "not read yet."
  //   }`;
  // };
}

function addBookToLibrary() {
  // do stuff here
}

function listBooks(books: IBook[]): void {
  const root = document.querySelector("#app");

  books.forEach((book) => {
    const list = document.createElement("ul");
    const heading = document.createElement("h3");
    heading.textContent = book.title;

    list.appendChild(heading);
    list.appendChild(createLiElement("Title: ", book.title));
    list.appendChild(createLiElement("Author: ", book.author));
    list.appendChild(createLiElement("Number of pages: ", book.numPages));
    list.appendChild(createLiElement("Read: ", book.isRead));

    root?.appendChild(list);
  });
}
listBooks(myLibrary);
