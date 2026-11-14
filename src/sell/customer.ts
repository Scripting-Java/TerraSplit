import { dessertMenu, type dessert } from "../desserts/dessert"

export interface customer {
    item: dessert,
    tippingChance: number
}

function getCustomerItem(want: number): dessert {
    const basic = dessertMenu.filter(temp => temp.tier === 0)
    const mid = dessertMenu.filter(temp => temp.tier === 1)
    const good = dessertMenu.filter(temp=>temp.tier==2)
    if (want < 0.6)
        return basic[Math.floor(Math.random() * basic.length)]
    else if (want < 0.85)
        return mid[Math.floor(Math.random() * mid.length)]
    else if(want<0.99)
        return good[Math.floor(Math.random()*good.length)]
    else
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
        const want = Math.min(Math.random() + lvl * 0.1, 0.95+Math.random()*0.06)
        const item = getCustomerItem(want)
        const tip = getTip(item)
        const temp: customer = { item: item, tippingChance: tip }
        customers.push(temp)
    }
    return customers
}
