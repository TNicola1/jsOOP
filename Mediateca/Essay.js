import { Document } from "./Document.js"

export class Essay extends Document {
    #topic

    constructor(title, author, availability, topic) {
        super(title, author, availability)
        this.#topic = topic
    }

    showInfo() {
        super.showInfo()
        console.log(`L'argomento del libro è ${this.#topic}`)
    }
}