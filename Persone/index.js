class Utente {
    nome;
    cognome;
    tesseraNumero;

    constructor(nome, cognome, tesseraNumero){
        // assegna ad ogni proprietà della classe un valore specifico dell'oggetto
        this.nome = nome
        this.cognome = cognome
        this.tesseraNumero = tesseraNumero
    }

    presentazione() {
        console.log(`Ciao! Mi chiamo ${this.nome} ${this.cognome} e ho la tessera numero ${this.tesseraNumero}`)
    }
}

class Persona {
    nome
    cognome
    isAlive = true

    constructor(nome, cognome) {
        this.nome = nome
        this.cognome = cognome
    }

    presentazione(){
        console.log(`Ciao! Mi chiamo ${this.nome} ${this.cognome}`)
        if(this.isAlive) {
            console.log("Sono vivo!")
        } else {
            console.log("Sono morto!")
        }
    }
}

class Studente extends Persona {
    corso
    matricola
    
    constructor(nome, cognome, corso, matricola) {
        super(nome, cognome)
        this.corso = corso
        this.matricola = matricola
    }

    presentazione() {
        super.presentazione()
        console.log(`Frequento il corso ${this.corso}, la mia matricola è ${this.matricola}`)
    }

    sostenereEsame(materia) {
        console.log(`Oggi devo fare l'esame di ${materia}`)
    }
}

class Professore extends Persona {
    materiaInsegnata

    constructor(nome, cognome, materiaInsegnata) {
        super(nome, cognome)
        this.materiaInsegnata = materiaInsegnata
    }

    presentazione() {
        console.log(`Buongiorno! Mi chiamo ${this.nome} ${this.cognome}. Insegno ${this.materiaInsegnata}`)
        this.#assegnareVoti()
    }

    #assegnareVoti() {
        console.log(`Ho corretto le verifiche di ${this.materiaInsegnata}`)
    }
}

class Assistente extends Studente {
    assistito

    constructor(nome, cognome, corso, matricola, assistito) {
        super(nome, cognome, corso, matricola)
        this.assistito = assistito
    }
}

