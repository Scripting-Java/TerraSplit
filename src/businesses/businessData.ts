import { type dessertTypes } from "../desserts/dessert"
import { bananaFarm, cocoaFarm, dairyFarm, flourMill, fruitFarm, sugarFarm, type farm } from "../farms/farm"

export interface business {
    name: string,
    dessert: dessertTypes,
    cost: number,
    unlockCost: number,
    levelReq: number,
    unlocked: boolean,
    purchased: boolean
    farm: farm,
}

export const bSplitShop: business = {
    name: "Banana Split Store",
    dessert: "bSplit",
    cost: 0,
    unlockCost: 0,
    levelReq: 0,
    unlocked: true,
    farm: bananaFarm,
    purchased: true
}

export const iceCream: business = {
    name: "Ice Cream Shop",
    dessert: "iceCream",
    cost: 1000,
    unlockCost: 1200,
    levelReq: 1,
    unlocked: false,
    farm: dairyFarm,
    purchased: false
}

export const chocolate: business = {
    name: "Chocolatier",
    dessert: "chocolate",
    cost: 5000,
    unlockCost: 7500,
    levelReq: 2,
    unlocked: false,
    farm: cocoaFarm,
    purchased: false
}

export const tartShop: business = {
    name: "Tart Shop",
    dessert: "tart",
    cost: 75000,
    unlockCost: 95000,
    levelReq: 3,
    unlocked: false,
    farm: fruitFarm,
    purchased: false
}

export const pieStore: business = {
    name: "Pie Bakery",
    dessert: "pie",
    cost: 750000,
    unlockCost: 1000000,
    levelReq: 4,
    unlocked: false,
    farm: flourMill,
    purchased: false
}

export const cakeShop: business = {
    name: "Cake Shop",
    dessert: "cake",
    cost: 7500000,
    unlockCost: 11250000,
    levelReq: 5,
    unlocked: false,
    farm: sugarFarm,
    purchased: false
}

export const businesses: business[] = [bSplitShop, iceCream, chocolate, tartShop, pieStore, cakeShop]
const names: string[] = businesses.map(bus => bus.name)
export type businessNames = typeof names[number]