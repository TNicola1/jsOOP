/*
Sistema di prenotazione viaggi
*/
class Vehicle {
    type
    model
    capacity
    reservations
    speedKmH
    consumptionLtKm
    fuelType
    fuelPriceLt
    services = []

    constructor(type, model, capacity, speedKmH, consumptionLtKm, fuelType, fuelPriceLt, services) {
        this.type = type
        this.model = model
        this.capacity = capacity
        this.speedKmH = speedKmH
        this.consumptionLtKm = consumptionLtKm
        this.fuelType = fuelType
        this.fuelPriceLt = fuelPriceLt
        this.services = services
        this.reservations = 0
    }

    calcPassengerPrice(distance) {
        let basePrice = this.calcCompanyPrice(distance) / this.capacity
        return basePrice * 1.5
    }

    calcCompanyPrice(distance) {
        let neededFuel = this.consumptionLtKm * distance
        return neededFuel * this.fuelPriceLt
    }

    calcEstimatedTimeH(distance) {
        return distance / this.speedKmH
    }

    printInfo() {
        console.log(`Mezzo: ${this.type}`)
        console.log(`Modello: ${this.model}`)
        console.log(`Numero massimo di passeggeri: ${this.capacity}`)
        console.log(`Attualmente prenotati: ${this.reservations}`)
        console.log(`Tipo di carburante: ${this.fuelType}`)
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
                console.log("Prenotazione effettuata")
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
            if(this.reservations >= 0) {
                this.reservations -= qnt
                console.log("Cancellazione della prenotazione avvenuta con successo")
            }
            else {
                console.log("Impossibile completare l'operazione")
            }
            
        }
    }
}

class Airplane extends Vehicle {
    constructor(type, model, capacity, speedKmH, consumptionLtKm, fuelType, fuelPriceLt, services)
    {
        super(type, model, capacity, speedKmH, consumptionLtKm, fuelType, fuelPriceLt, services)
    }
}

class Train extends Vehicle {
    constructor(type, model, capacity, speedKmH, consumptionLtKm, fuelType, fuelPriceLt, services)
    {
        super(type, model, capacity, speedKmH, consumptionLtKm, fuelType, fuelPriceLt, services)
    }
}

class Bus extends Vehicle {
    constructor(type, model, capacity, speedKmH, priceKm, consumptionLtKm, fuelType, fuelPriceLt, services)
    {
        super(type, model, capacity, speedKmH, priceKm, consumptionLtKm, fuelType, fuelPriceLt, services)
    }
}

