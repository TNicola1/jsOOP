class Book {
    #title
    #author
    #available

    get available() {
        return this.#available
    }

    set available(avb) {
        this.#available = avb
    }
    
    constructor(title, author) {
        this.#available = true
        this.#title = title
        this.#author = author
    }

    borrow() {
        if(!this.#available) {
            console.log("Il libro richiesto non è disponibile")
        } else {
            console.log("Il libro richiesto è disponibile")
            this.#available = false
        }
    }

    return() {
        if(!this.#available) {
            console.log("Grazie per avere restituito il libro")
            this.#available = true
        } else {
            console.log("Il libro non è stato dato in prestito")
        }
    }

    showInfo() {
        console.log(`Il titolo del libro è "${this.#title}"`)
        console.log(`L'autore del libro è ${this.#author}`)
        console.log(`Il libro ${this.#available ? "è" : "non è"} disponibile`)

    }
}

class Novel extends Book {
    #genre

    constructor(title, author, genre) {
        super(title, author)
        this.#genre = genre
    }

    showInfo() {
        super.showInfo()
        console.log(`Il genere del libro è ${this.#genre}`)
    }
}

class Assay extends Book {
    #topic

    constructor(title, author, title) {
        super(title, author)
        this.#topic = topic
    }

    showInfo() {
        super.showInfo()
        console.log(`L'argomento del libro è ${this.#topic}`)
        
    }
}

class Manual extends Book {
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
        console.log(`La categori del libro è ${this.#category}`)
        console.log(`E' la ${this.#edition} edizione`)
    }
}