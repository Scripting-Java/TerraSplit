import { type farmTypes } from "../farms/farm";

interface shopLevelReq{
    level:number,
    customers:number,
    farmType: farmTypes
}

export const reqs:shopLevelReq[] = [
    {level:2,customers:500,farmType:"dairy"},
    {level:3,customers:1500,farmType:"cocoa"},
    {level:4,customers:3750,farmType:"fruit"},
    {level:5,customers:10000,farmType:"flourMill"},
]