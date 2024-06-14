/*
Sistema di prenotazione viaggi
*/
import { Fuel } from "./Fuel.js"
import { Airplane } from "./Airplane.js"
import { Train } from "./Train.js"
import { Bus } from "./Bus.js"
import { Fuel } from "./Fuel.js"

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


