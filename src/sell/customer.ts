import { dessertMenu, type dessert } from "../desserts/dessert"
import { type business } from "../businesses/businessData"
export interface customer {
    item: dessert,
    tippingChance: number
}

function getCustomerItem(want: number, shops:business[]): dessert {
    const ownedBus = shops.filter(bus=>bus.purchased)
    const ownedDesserts = ownedBus.map(bus=>dessertMenu.find(des=>des.type===bus.dessert)).filter(des=>des!==undefined)
    const lowest = Math.min(...ownedDesserts.map(des=>des.tier))
    const basic = ownedDesserts.filter(des=>des.tier===lowest)
    const highest = Math.max(...ownedDesserts.map(des=>des.tier))
    const good = ownedDesserts.filter(des=>des.tier===highest)
    const mid = ownedDesserts.filter(des=>des.tier!==highest && des.tier!==lowest)
    if (want < 0.6)
        return basic[Math.floor(Math.random() * basic.length)]
    else if(want<0.74)
        return good[Math.floor(Math.random()*good.length)]
    else if (want < 0.99 && mid.length!==0)
        return mid[Math.floor(Math.random() * mid.length)]
    else
        return ownedDesserts[Math.floor(Math.random() * ownedDesserts.length)]
}

function getTip(dessert: dessert): number {
    const tier = dessert.tier
    if (tier === 0)
        return Math.random() * 0.15
    if (tier === 1)
        return Math.random() * 0.25
    if(tier===2)
        return Math.random()*0.4
    else
        return 0
}

export function makeCustomers(amt: number, lvl: number, businesses:business[]): customer[] {
    const customers: customer[] = []
    for (let i = 0; i < amt; i++) {
        const want = Math.min(Math.random() + (lvl-1) * 0.1, 0.95+Math.random()*0.06)
        const item = getCustomerItem(want, businesses)
        const tip = getTip(item)
        const temp: customer = { item: item, tippingChance: tip }
        customers.push(temp)
    }
    return customers
}
