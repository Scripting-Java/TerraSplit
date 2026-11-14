export type dessertTypes = "bSplit"|"iceCream"|"chocolate"|"tart"|"pie"|"cake"
export interface dessert{
    type: dessertTypes,
    prodDur: number,
    prodValue: number,
    tier: number,
}
import { bSplit } from "./basic/bSplit"
import { iceCream } from "./basic/iceCream"
import { chocolate } from "./basic/chocolate"
export const basicDesserts: dessert[] = [bSplit,iceCream,chocolate]

import { tart } from "./mid/tart"
import { pie } from "./mid/pie"
import { cake } from "./mid/cake"
export const midDesserts: dessert[] = [tart, pie, cake]

export const dessertMenu: dessert[] = [...basicDesserts,...midDesserts]
