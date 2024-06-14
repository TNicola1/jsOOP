export class Fuel {
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