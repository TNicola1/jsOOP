export class Book {
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

    rent() {
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
        console.log(`Attualmente ${this.#available ? "è" : "non è"} disponibile`)
    }
}