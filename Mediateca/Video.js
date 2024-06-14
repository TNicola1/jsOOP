import { Book } from "./Book.js"

export class Video extends Book {
    #framerate
    #download

    constructor(title, author, framerate) {
        super(title, author)
        this.#framerate = framerate
        this.#download = 0
    }

    download() {
        this.#download += 1
        console.log("Il video è stato scaricato")
    }

    showInfo() {
        super.showInfo()
        console.log(`Il video ha un framerate ${this.#framerate}`)
    }
}