import { Dipendente } from "./Dipendente.js"

export class Impiegato extends Dipendente {
    capo

    constructor(nome, cognome, tariffaOraria, capo) {
        super(nome, cognome, tariffaOraria)
        this.capo = capo
    }

    presentazione(){
        super.presentazione()
        console.log("Sono un impiegato")
    }

    lamentarsiDelCapo() {
        console.log(this.capo.nome + " " + this.capo.cognome + " è un cretino!")
    }
}