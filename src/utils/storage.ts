import type { business } from "../businesses/businessData";
import type { dessertTypes } from "../desserts/dessert";
import { dessertMenu } from "../desserts/dessert";
export function canProduce(dessert:dessertTypes, businesses:business[], storage:number, inv:Record<dessertTypes,number>){
    const owned = businesses.filter(bus=>bus.purchased)
    if(owned.length===0)
        return
    const ownedDesserts = owned.map(bus=>dessertMenu.find(d=>d.type===bus.dessert)!)
    const tiersOwned = ownedDesserts.map(des=>des.tier)
    let highest = -100
    let lowest = 100
    for(const tier of tiersOwned){
        if(tier>highest){
            highest=tier
        }
        if(tier<lowest){
            lowest=tier
        }
    }
    //so if just bSplit then yeah u cn produce bSPlit
    if(lowest===highest)
        return true
    //at this point we got the tiers sorted
    //need to make production rules
    const des = dessertMenu.find(des=>des.type===dessert)
    if(!des)
        return
    const tier = des.tier
    const allDes = dessertMenu.filter(des=>des.tier===tier).map(des=>des.type)
    
    //sum current inv for that tier
    let current = 0
    for(let i = 0; i<allDes.length;i++){
        current+=inv[allDes[i]]
    }
    
    //handle easy cases
    if(tier===lowest){
        if(current<storage*0.25)
            return true
    }
    if(tier===highest){
        if(current<storage*0.75)
            return true
    }
    if(tier!==highest && tier!==lowest)
        if(current<storage*0.45)
            return true
    return false
}