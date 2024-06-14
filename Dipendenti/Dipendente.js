export class Dipendente {
    nome
    cognome
    tariffaOraria

    constructor(nome, cognome, tariffaOraria) {
        this.nome = nome
        this.cognome = cognome
        this.tariffaOraria = tariffaOraria
    }

    presentazione(){
        console.log(`Buongiorno sono ${this.nome} ${this.cognome}`)
    }

    calcolareStipendioMensile() {
        return this.tariffaOraria * 8 * 20
    }

    calcolareStipendioAnnuale() {
        return this.calcolareStipendioMensile() * 12
    }
}
