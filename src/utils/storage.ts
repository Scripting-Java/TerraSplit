import type { business } from "../businesses/businessData";
import type { dessertTypes } from "../desserts/dessert";
import { dessertMenu } from "../desserts/dessert";

export function canProduce(dessert: dessertTypes, businesses: business[], storage: number, inv: Record<dessertTypes, number>): boolean {
    const owned = businesses.filter(bus => bus.purchased)
    if (owned.length === 0)
        return false
    const ownedDesserts = owned.map(bus => dessertMenu.find(d => d.type === bus.dessert)!)
    const tiersOwned = ownedDesserts.map(des => des.tier)
    let highest = -100
    let lowest = 100
    for (const tier of tiersOwned) {
        if (tier > highest) {
            highest = tier
        }
        if (tier < lowest) {
            lowest = tier
        }
    }
    //so if just bSplit then yeah u cn produce bSPlit
    if (lowest === highest)
        return true
    //at this point we got the tiers sorted
    //need to make production rules
    const des = dessertMenu.find(des => des.type === dessert)
    if (!des)
        return false
    const tier = des.tier
    const allDes = dessertMenu.filter(des => des.tier === tier).map(des => des.type)

    //sum current inv for that tier
    let current = 0
    for (let i = 0; i < allDes.length; i++) {
        current += inv[allDes[i]]
    }

    //handle easy cases
    if (tier === lowest) {
        if (current < storage * 0.75)
            return true
    }
    if (tier === highest) {
        if (current < storage * 0.45)
            return true
    }
    if (tier !== highest && tier !== lowest)
        if (current < storage * 0.25)
            return true
    return false
}

export function prodRatio(businesses: business[], dessert: dessertTypes): number {
    const unlockedBus = businesses.filter(bus => bus.purchased)
    let bakers = 0
    const des = dessertMenu.find(des => des.type === dessert)
    const business = businesses.find(bus => bus.dessert === dessert && bus.purchased)
    if (!des)
        return 0
    for (const bus of unlockedBus) {
        const bustier = dessertMenu.find(des => des.type === bus.dessert)!.tier
        if (des.tier === bustier)
            bakers += bus.bakers
    }
    if (!business)
        return 0
    const ownedDesserts = unlockedBus.map(bus=>bus.dessert)
    const ownedTiers = dessertMenu.filter(des=>ownedDesserts.includes(des.type))
    let lowest = 100
    let highest = -100
    for(const des of ownedTiers){
        if(des.tier<lowest)
            lowest=des.tier
        if(des.tier>highest)
            highest=des.tier
    }
    let alloted = 1
    if(lowest!=highest){
        if(des.tier===lowest)
            alloted=0.75
        else if(des.tier===highest)
            alloted=0.45
        else
            alloted=0.25
    }
    return business.bakers / bakers * alloted
}