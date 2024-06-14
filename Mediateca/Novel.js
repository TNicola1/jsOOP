import { Document } from "./Document.js"

export class Novel extends Document {
    #genre

    constructor(title, author, availability, genre) {
        super(title, author, availability)
        this.#genre = genre
    }

    showInfo() {
        super.showInfo()
        console.log(`Il genere del libro è ${this.#genre}`)
    }
}
