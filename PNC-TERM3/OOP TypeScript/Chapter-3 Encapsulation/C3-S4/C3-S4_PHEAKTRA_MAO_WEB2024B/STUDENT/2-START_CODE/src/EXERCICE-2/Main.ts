import { Book } from "./Book";
import { Library } from "./Library";
import { Author } from "./Author";
import { Publisher } from "./Publisher";

// TODO
const library1 = new Library("PNC Library", "PP")
const author1 = new Author("Sanok")
const author2 = new Author("Chorn")
const publisher1 = new Publisher("sanok", "PP")

const book1 = new Book("abc", 2024)
const book2 = new Book("def", 2024)
const book3 = new Book("def", 2024)

book1.setPublisher(publisher1);
book2.setPublisher(publisher1);

book1.addAuthor(author2);
book2.addAuthor(author2);

library1.addBook(book1, book2, book3)
console.log(library1.getBooksFromPublisher(publisher1))
