import { Impiegato } from "./Impiegato.js"

export class Stagista extends Impiegato {
    forfaitMensile

    constructor(nome, cognome, capo, forfaitMensile, tariffaOraria = 0) {
        super(nome, cognome, tariffaOraria, capo)
        this.forfaitMensile = forfaitMensile
    }

    presentazione(){
        console.log(`Mi chiamo ${this.nome} ${this.cognome}, sono uno stagista`)
    }

    calcolareStipendioMensile() {
        return this.tariffaOraria == 0 ? this.forfaitMensile : super.calcolareStipendioMensile()
    }
}