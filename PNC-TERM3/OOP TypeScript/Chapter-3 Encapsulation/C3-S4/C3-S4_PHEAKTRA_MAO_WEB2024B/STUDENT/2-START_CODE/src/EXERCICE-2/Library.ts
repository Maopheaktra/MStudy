import { Book } from "./Book";
import { Author } from "./Author"
import { Publisher } from "./Publisher"

// TODO
export class Library{
    constructor(private name:string, private address:string, private books: Book[] = []){
        this.name = name;
        this.address = address;
    }

    addBook(...book: Book[]) : void {
        book.forEach(b => {
            this.books.push(b)
        })
    }

    getBooksFromAuthor(author: Author) : Book[] {
        return this.books.filter(b => b.getAuthor(author).length > 0)
    }

    getBooksFromPublisher(publisher: Publisher) : Book[] {
        return this.books.filter(b => b.getPublisher(publisher))
    }
}