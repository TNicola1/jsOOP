import { Book } from "./Book.js"

export class Essay extends Book {
    #topic

    constructor(title, author, topic) {
        super(title, author)
        this.#topic = topic
    }

    showInfo() {
        super.showInfo()
        console.log(`L'argomento del libro è ${this.#topic}`)
        console.log(`Il libro ${this.available ? "è" : "non è"} disponibile`)
    }
}