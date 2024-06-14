import { Dipendente } from "./Dipendente.js"

export class Dirigente extends Dipendente {
    sezione
    bonusAnnuale

    constructor(nome, cognome, sezione, tariffaOraria, bonusAnnuale) {
        super(nome, cognome, tariffaOraria)
        this.sezione = sezione
        this.bonusAnnuale = bonusAnnuale
    }

    presentazione(){
        super.presentazione()
        console.log("Sono un dirigente")
    }

    assumere() {
        console.log("Bisogna fatturare di più")
    }

    licenziare() {
        console.log("Bisogna tagliare")
    }

    calcolareStipendioAnnuale() {
        return super.calcolareStipendioAnnuale() + (this.bonusAnnuale * super.calcolareStipendioAnnuale()) / 100
    }
}