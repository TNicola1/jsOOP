import { Digital } from "./Digital"

export class Audio extends Digital {
    format

    constructor(title, author, format) {
        super(title, author)
        this.format = format

    }

    showInfo() {
        super.showInfo()
        console.log(`L'audio è in formato ${this.format}`)
    }
}