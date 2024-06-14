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
    incrementPC
    services = []

    constructor(type, model, capacity, speedKmH, consumptionLtKm, fuelType, fuelPriceLt, incrementPC, services) {
        this.type = type
        this.model = model
        this.capacity = capacity
        this.incrementPC = incrementPC
        this.speedKmH = speedKmH
        this.consumptionLtKm = consumptionLtKm
        this.fuelType = fuelType
        this.fuelPriceLt = fuelPriceLt
        this.services = [...services]
        this.reservations = 0
    }

    calcPassengerPrice(distance) {
        let basePrice = this.calcCompanyPrice(distance) / this.capacity
        let increment = basePrice * (this.incrementPC / 100)
        return basePrice + increment
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

    defaultConsumptionLt

    constructor(type, model, capacity, speedKmH, consumptionLtKm, fuelType, fuelPriceLt, services, defaultConsumptionLt)
    {
        let incrementPC = 90
        super(type, model, capacity, speedKmH, consumptionLtKm, fuelType, fuelPriceLt, incrementPC, services)
        this.defaultConsumptionLt = defaultConsumptionLt
    }

    calcCompanyPrice(distance) {
        let flightPrice = super.calcCompanyPrice(distance)
        let defaultPrice = this.defaultConsumptionLt * this.fuelPriceLt
        return flightPrice + defaultPrice
    }
}

class Train extends Vehicle {
    constructor(type, model, capacity, speedKmH, consumptionLtKm, fuelType, fuelPriceLt, services)
    {
        let incrementPC = 60
        super(type, model, capacity, speedKmH, consumptionLtKm, fuelType, fuelPriceLt, incrementPC, services)
    }
}

class Bus extends Vehicle {
    constructor(type, model, capacity, speedKmH, consumptionLtKm, fuelType, fuelPriceLt, services)
    {
        let incrementPC = 20
        super(type, model, capacity, speedKmH, consumptionLtKm, fuelType, fuelPriceLt, incrementPC, services)
    }
}

const aereo = new Airplane("Aereo", "Boeing 747", 600, 988, 12, "cherosene", 1.5, ["Checkin online", "Pasti", "Wi-fi", "Tablet"], 4000)
const treno = new Train("Treno", "Frecciarossa", 450, 360, 90, "diesel", 2.075, ["Cuccette", "Ristorante", "Aria condizionata", "Wi-fi"])
const bus = new Bus("Bus", "Iveco", 50, 70, 20, "diesel", 2.075, ["Wi-fi", "Aria condizionata", "Sedili reclinabili"])

// Stampa info mezzi
let arrayMezzi = [aereo, treno, bus]

for(const mezzo of arrayMezzi) {
    mezzo.printInfo()
    console.log(`Un viaggio in ${mezzo.type} per 100km costa ${mezzo.calcPassengerPrice(100)}`)
}
