export class Vehicle {
    #type
    #model
    #capacity
    #reservations
    #speedKmH
    #consumptionLtKm
    #fuel
    #incrementPC
    #services = []

    constructor(type, model, capacity, speedKmH, consumptionLtKm, fuel, incrementPC, services) {
        this.type = type
        this.model = model
        this.capacity = capacity
        this.incrementPC = incrementPC
        this.speedKmH = speedKmH
        this.consumptionLtKm = consumptionLtKm
        this.fuel = fuel
        this.services = [...services]
        this.reservations = 0
    }

    get Reservations() {
        return this.#reservations
    }

    set Reservations(res) {
        this.#reservations = res
    }

    calcPassengerPrice(distance) {
        let basePrice = this.calcCompanyPrice(distance) / this.capacity
        let increment = basePrice * (this.incrementPC / 100)
        return basePrice + increment
    }

    calcCompanyPrice(distance) {
        let neededFuel = this.consumptionLtKm * distance
        return neededFuel * this.fuel.priceLt
    }

    calcEstimatedTimeH(distance) {
        return distance / this.speedKmH
    }

    printInfo() {
        console.log(`Mezzo: ${this.type}`)
        console.log(`Modello: ${this.model}`)
        console.log(`Numero massimo di passeggeri: ${this.capacity}`)
        console.log(`Attualmente prenotati: ${this.reservations}`)
        console.log(`Tipo di carburante: ${this.fuel.name}`)
        console.log(`Servizi disponibili: ${this.services.join(", ")}`)
        
    }

    addReservation(qnt) {
        let availability = this.capacity - this.reservations
        if(availability == 0) {
            console.log("Impossibile effettuare la prenotazione")
            console.log("Non ci sono posti disponibili")
        }
        else {
            if(qnt <= availability) {
                this.reservations += qnt
                console.log(`Prenotazione di ${qnt} posti ${this.type} effettuata`)
            }
            else {
                console.log("Impossibile effettuare la prenotazione")
                console.log(`Ci sono ancora ${availability} posti disponibili`)
            }
        }
    }

    removeReservation(qnt) {
        if(this.reservations == 0){
            console.log("Non ci sono prenotazioni")
        }
        else {
            if(this.reservations - qnt >= 0) {
                this.reservations -= qnt
                console.log("Cancellazione della prenotazione avvenuta con successo")
                console.log(("I posti prenotati sono " + this.reservations))
            }
            else {
                console.log("Impossibile effettuare la cancellazione")
            }
            
        }
    }
}