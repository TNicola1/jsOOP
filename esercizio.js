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
            console.log(`Il libro "${this.#title}" non è disponibile, lo devi restituire!`)
        } else {
            console.log(`Il libro "${this.#title}" è disponibile`)
            console.log(`Hai preso in prestito ${this.#title}. Ricordati di restituirlo!`)
            this.#available = false
        }
    }

    return() {
        if(!this.#available) {
            console.log(`Grazie per aver restituito "${this.#title}"`)
            this.#available = true
        } else {
            console.log(`"${this.#title}" non è stato ancora prestato`)
        }
    }

    showInfo() {
        console.log(`Il titolo del libro è "${this.#title}"`)
        console.log(`L'autore del libro è ${this.#author}`)
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
        console.log(`Il libro ${this.available ? "è" : "non è"} disponibile`)
    }
}

class Assay extends Book {
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
        console.log(`La categoria del libro è ${this.#category}`)
        console.log(`E' la ${this.#edition} edizione`)
        console.log(`Il libro ${this.available ? "è" : "non è"} disponibile`)
    }
}

class Video extends Book {
    #framerate
    #download

    constructor(title, author, framerate) {
        super(title, author)
        this.#framerate = framerate
        this.#download = 0
    }

    borrow() {
        console.log("Prestito non disponibile")
    }

    return() {
        console.log("Restituzione non disponibile")
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

class Audio extends Book {
    #format
    #download

    constructor(title, author, format) {
        super(title, author)
        this.#format = format
        this.#download = 0
    }

    borrow() {
        console.log("Prestito non disponibile")
    }

    return() {
        console.log("Restituzione non disponibile")
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

const romanzo = new Novel("La freccia nera", "Robert Louis Stevenson", "Storico")
romanzo.borrow()
romanzo.showInfo()
romanzo.borrow()
romanzo.showInfo()
romanzo.return()
romanzo.showInfo()