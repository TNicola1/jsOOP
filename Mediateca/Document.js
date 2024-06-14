export class Document {
    title 
    author
    availability

    constructor(title, author) {
        this.title = title
        this.author = author
        this.availability = availability
    }

    rent() {
        // check availability
        this.availability = false
        console.log("Prestito effettuato")
    }

    return() {
        // check availability
        this.availability = true
        console.log("Restituzione effettuata")
    }
}