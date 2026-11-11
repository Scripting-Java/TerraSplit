import type { dessertTypes } from "../desserts/dessert";
import { dessertMenu } from "../desserts/dessert";
import type { customer } from "./customer";

export function sellDessert(type: dessertTypes, customerList: customer[], amount: number) {
    const dessert = dessertMenu.find(temp => temp.type === type)
    if (!dessert)
        return { money: 0, count: 0 }
    let count = 0
    let tipCount = 0
    for (const cust of customerList) {
        const tip = Math.random()
        if (count >= amount)
            break
        if (cust.item.type === type) {
            count++
            if (cust.tippingChance > tip)
                tipCount++
        }
    }
    return { money: count * dessert.prodValue + tipCount * dessert.prodValue * 0.2, count: count }
}