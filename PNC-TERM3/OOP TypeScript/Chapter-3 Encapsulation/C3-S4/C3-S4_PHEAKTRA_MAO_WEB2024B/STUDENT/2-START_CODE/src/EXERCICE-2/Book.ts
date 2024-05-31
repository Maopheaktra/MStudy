import { Author } from "./Author";
import { Publisher } from "./Publisher";

// TODO
export class Book {
    constructor(
        private title: string, 
        private publishYear: number, 
        private publisher?: Publisher,
        private author: Author[] = [],  
    ) {
        this.title = title;
        this.publishYear = publishYear;
    }

    addAuthor(author:Author): void {
        this.author.push(author);
    }

    setPublisher(publisher:Publisher): void {
        this.publisher = publisher;
    }  
    
    getAuthor(author: Author): Author[] {
        return this.author.filter(a => a.getName() == author.getName())
    }

    getPublisher(publisher: Publisher) {
        if (publisher.getName() == this.publisher?.getName()) return publisher;
    }
    
    
}