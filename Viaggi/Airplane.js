import { Vehicle } from "./Vehicle.js";

export class Airplane extends Vehicle {

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