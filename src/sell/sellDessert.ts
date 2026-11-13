import type { dessertTypes } from "../desserts/dessert";
import { dessertMenu } from "../desserts/dessert";
import type { customer } from "./customer";

export function sellDessert(type: dessertTypes, customerList: customer[], amount: number, income:number, tip:number) {
    const dessert = dessertMenu.find(temp => temp.type === type)
    if (!dessert)
        return { money: 0, count: 0 }
    let count = 0
    let tipCount = 0
    for (const cust of customerList) {
        const tipReq = Math.random()
        if (count >= amount)
            break
        if (cust.item.type === type) {
            count++
            if (cust.tippingChance*(1+tip) > tipReq)
                tipCount++
        }
    }
    return { money: count * dessert.prodValue*income + tipCount * dessert.prodValue*income * 0.2, count: count }
}