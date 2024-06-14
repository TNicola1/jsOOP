import { Vehicle } from "./Vehicle.js"
export class Train extends Vehicle {
    constructor(type, model, capacity, speedKmH, consumptionLtKm, fuel, services)
    {
        let incrementPC = 60
        super(type, model, capacity, speedKmH, consumptionLtKm, fuel, incrementPC, services)
    }
}