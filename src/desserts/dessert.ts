export type dessertTypes = "bSplit"|"iceCream"|"chocolate"
export interface dessert{
    type: dessertTypes,
    prodDur: number,
    prodValue: number,
}

import { bSplit } from "./bSplit"
import { iceCream } from "./iceCream"
import { chocolate } from "./chocolate"

export const basicDesserts: dessert[] = [bSplit,iceCream,chocolate]
