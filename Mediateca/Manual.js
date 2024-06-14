import { Document } from "./Document.js"

export class Manual extends Document {
    #category
    #edition

    constructor(title, author, availability, category, edition)
    {
        super(title, author, availability) 
        this.#category = category
        this.#edition = edition
    }

    showInfo() {
        super.showInfo()
        console.log(`La categoria del libro è ${this.#category}`)
        console.log(`E' la ${this.#edition} edizione`)
    }
}
