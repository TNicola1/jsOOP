import { Vehicle } from "./Vehicle.js";

export class Bus extends Vehicle {
    constructor(type, model, capacity, speedKmH, consumptionLtKm, fuel, services)
    {
        let incrementPC = 20
        super(type, model, capacity, speedKmH, consumptionLtKm, fuel, incrementPC, services)
    }
}