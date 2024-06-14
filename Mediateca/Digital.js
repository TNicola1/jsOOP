import { Document } from "./Document.js";

export class Digital {
    numDownload

    constructor(title, author) {
        super(title, author, true)
    }

    rent() {
        this.numDownload++
        console.log("Download effettuato")
    }

    return() {
        console.log("Non è prevista la restituzione")
    }
}