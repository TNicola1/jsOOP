/*
Sistema di prenotazione viaggi
*/
class Vehicle {
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

class Airplane extends Vehicle {

    defaultConsumptionLt

    constructor(type, model, capacity, speedKmH, consumptionLtKm, fuel, services, defaultConsumptionLt)
    {
        console.log(fuel.name + " " + fuel.priceLt)
        let incrementPC = 90
        super(type, model, capacity, speedKmH, consumptionLtKm, fuel, incrementPC, services)
        this.defaultConsumptionLt = defaultConsumptionLt
    }

    calcCompanyPrice(distance) {
        let flightPrice = super.calcCompanyPrice(distance)
        let defaultPrice = this.defaultConsumptionLt * this.fuel.priceLt
        return flightPrice + defaultPrice
    }
}

class Train extends Vehicle {
    constructor(type, model, capacity, speedKmH, consumptionLtKm, fuel, services)
    {
        let incrementPC = 60
        super(type, model, capacity, speedKmH, consumptionLtKm, fuel, incrementPC, services)
    }
}

class Bus extends Vehicle {
    constructor(type, model, capacity, speedKmH, consumptionLtKm, fuel, services)
    {
        let incrementPC = 20
        super(type, model, capacity, speedKmH, consumptionLtKm, fuel, incrementPC, services)
    }
}

class Fuel {
    #name
    #priceLt

    constructor(name, priceLt) {
        this.name = name
        this.priceLt = priceLt
    }

    get name() {
        return this.#name
    }

    set name(name) {
        this.#name = name
    }

    get priceLt() {
        return this.#priceLt
    }

    set priceLt(price) {
        this.#priceLt = price
    }
}
const fuel1 = new Fuel("cherosene", 1.5)
const fuel2 = new Fuel("diesel", 2.075)
const aereo = new Airplane("Aereo", "Boeing 747", 600, 988, 12, fuel1, ["Checkin online", "Pasti", "Wi-fi", "Tablet"], 4000)
const treno = new Train("Treno", "Frecciarossa", 450, 360, 90, fuel2, ["Cuccette", "Ristorante", "Aria condizionata", "Wi-fi"])
const bus = new Bus("Bus", "Iveco", 50, 70, 20, fuel2, ["Wi-fi", "Aria condizionata", "Sedili reclinabili"])

// Stampa info mezzi
let arrayMezzi = [aereo, treno, bus]

for(const mezzo of arrayMezzi) {
    mezzo.printInfo()
    console.log(`Un viaggio in ${mezzo.type} per 100km costa ${mezzo.calcPassengerPrice(100)}`)
    let timeInMinutes = mezzo.calcEstimatedTimeH(100) * 60
    let minutes = timeInMinutes % 60
    let hours = Math.floor(mezzo.calcEstimatedTimeH(100))
    console.log(`Il viaggio dura circa ${hours} ore e ${minutes.toFixed()} minuti`)
}

aereo.addReservation(358)
aereo.addReservation(306)
aereo.removeReservation(146)
aereo.addReservation(274)
aereo.removeReservation(600)

aereo.Reservations = 30
console.log(aereo.Reservations)


