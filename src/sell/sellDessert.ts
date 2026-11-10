import type { dessertTypes } from "../desserts/dessert";
import { type dessert, basicDesserts } from "../desserts/dessert";
import type { customer } from "./customer";

export function sellDessert(type: dessertTypes, customerList: customer[], amount: number) {
    let dessert: dessert | undefined
    let count = 0
    let tipCount = 0
    for (const tempDessert of basicDesserts) {
        if (tempDessert.type === type)
            dessert = tempDessert
    }
    if (dessert != undefined) {
        for (const cust of customerList) {
            if (count >= amount)
                break
            const tip = Math.random()
            if (cust.item.type === type) {
                count++
                if (cust.tippingChance > tip)
                    tipCount++
            }
        }
    }
    if (dessert)
        return {money:count * dessert.prodValue + tipCount * dessert.prodValue * 0.2, count:count}
    return {money:0,count:0}
}