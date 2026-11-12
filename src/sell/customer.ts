import { dessertMenu, type dessert } from "../desserts/dessert"

export interface customer {
    item: dessert,
    tippingChance: number
}

function getCustomerItem(want: number): dessert {
    if (want < 0.6) {
        return dessertMenu.filter(temp => temp.tier === 0)[Math.floor(Math.random() * dessertMenu.filter(temp => temp.tier === 0).length)]
    } else if (want < 0.85) {
        return dessertMenu.filter(temp => temp.tier === 0)[Math.floor(Math.random() * dessertMenu.filter(temp => temp.tier === 1).length)]
    } else
        return dessertMenu[Math.floor(Math.random() * dessertMenu.length)]
}

function getTip(dessert: dessert): number {
    const tier = dessert.tier
    if (tier === 0)
        return Math.random() * 0.15
    if (tier === 1)
        return Math.random() * 0.25
    else
        return 0
}

export function makeCustomers(amt: number, lvl: number): customer[] {
    const customers: customer[] = []
    for (let i = 0; i < amt; i++) {
        const want = Math.random() + lvl * 0.1
        const item = getCustomerItem(want)
        const tip = getTip(item)
        const temp: customer = { item: item, tippingChance: tip }
        customers.push(temp)
    }
    return customers
}
