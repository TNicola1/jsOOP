import { Book } from "./Book.js"
export class Manual extends Book {
    #category
    #edition

    constructor(title, author, category, edition)
    {
        super(title, author) 
        this.#category = category
        this.#edition = edition
    }

    showInfo() {
        super.showInfo()
        console.log(`La categoria del libro è ${this.#category}`)
        console.log(`E' la ${this.#edition} edizione`)
    }
}
