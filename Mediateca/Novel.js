import { Book } from "./Book.js"

export class Novel extends Book {
    #genre

    constructor(title, author, genre) {
        super(title, author)
        this.#genre = genre
    }

    showInfo() {
        super.showInfo()
        console.log(`Il genere del libro è ${this.#genre}`)
    }
}
