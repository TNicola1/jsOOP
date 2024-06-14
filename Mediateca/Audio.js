import { Book } from "./Book.js"

export class Audio extends Book {
    #format
    #download

    constructor(title, author, format) {
        super(title, author)
        this.#format = format
        this.#download = 0
    }

    download() {
        this.#download += 1
        console.log("L'audio è stato scaricato")
    }

    showInfo() {
        super.showInfo()
        console.log(`L'audio è in formato ${this.#format}`)
    }
}