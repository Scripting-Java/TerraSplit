import type { business } from "../businesses/businessData";

export function getBakerCost(bus: business): number {
    const baseCost = Math.max(1, bus.cost / 100)
    return Math.ceil(baseCost * Math.pow(1.05, bus.bakers - 1))
}

export function hireBaker(bus: business, money: number) {
    const cost = getBakerCost(bus)
    if (money >= cost && bus.purchased) {
        return {bakers:bus.bakers+1,money:money-cost}
    }
    return{bakers:bus.bakers,money:money}
}