import { basicDesserts, type dessert } from "../desserts/dessert"

export interface customer {
    item: dessert,
    tippingChance: number
}

function getCustomerItem(want: number): dessert {
    if (want < 0.4)
        return basicDesserts[0]
    if (want < 0.55)
        return basicDesserts[1]
    else
        return basicDesserts[2]
}

export function makeCustomers(amt: number): customer[] {
    const customers:customer[] = []
    for (let i = 0; i < amt; i++) {
        const want = Math.random()
        const tip = Math.random() * 0.2
        const item = getCustomerItem(want)
        const temp: customer = {item:item, tippingChance:tip}
        customers.push(temp)
    }
    return customers
}
