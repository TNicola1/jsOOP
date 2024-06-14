import { Document } from "./Document.js";

export class Digital extends Document {
    numDownload

    constructor(title, author) {
        super(title, author, true)
        this.numDownload = 0
    }

    rent() {
        this.numDownload++
        console.log("Download effettuato")
    }

    return() {
        console.log("Non è prevista la restituzione")
    }
}