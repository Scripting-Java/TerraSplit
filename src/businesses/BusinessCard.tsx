import "./businesscard.css"
import type { business } from "./businessData";
import { dessertMenu, type dessertTypes } from "../desserts/dessert";
import { formatTime, moneyFormat } from "../utils/formatter";
import { FarmCard } from "../farms/FarmCard";
import { getFarmMultipliers, type farmTypes } from "../farms/farm";
import bSplit from "../assets/busIcons/BananaSplit.png"

interface BusinessCard {
    business: business,
    handleFarmPurchase: (farmType: farmTypes, upgrade: string) => void,
    handleBusPurchase: (name: string) => void,
    handleBusUnlock: (name: string) => void
}

function makeDessertNames(des: dessertTypes) {
    if (des === "bSplit")
        return "Banana Split"
    if (des === "iceCream")
        return "Ice Cream"
    if (des === "chocolate")
        return "Chocolate"
    if (des === "tart")
        return "Tart"
    if (des === "pie")
        return "Pie"
    if (des === "cake")
        return "Cake"
}

function getLogo(des: dessertTypes) {
    if (des === "bSplit")
        return bSplit
}

export function BusinessCard({ business, handleFarmPurchase, handleBusPurchase, handleBusUnlock }: BusinessCard) {
    const dessert = dessertMenu.find(temp => temp.type === business.dessert)
    if (!dessert)
        return null
    const mult = getFarmMultipliers(business.farm)
    return (
        <div className="business">
            <h2>{business.name}</h2>
            {business.purchased && (
                <div className="busInfo">
                    <p>Produces: {makeDessertNames(dessert.type)}</p>
                    <p>Production Time: {formatTime(dessert.prodDur * mult.prod)} seconds</p>
                    <p>Sale Value: {moneyFormat(dessert.prodValue * mult.inc)}</p>
                </div>
            )}
            <div className="busMain">
                <img className="busLogo" src={getLogo(business.dessert)}></img>
                {business.purchased && (
                    <div className="farmInfo">
                        <FarmCard farm={business.farm} handlePurchase={handleFarmPurchase}></FarmCard>
                    </div>
                )}
                {!business.unlocked && (
                    <button onClick={() => handleBusUnlock(business.name)}>Unlock For {moneyFormat(business.unlockCost)}</button>
                )}
                {business.unlocked && !business.purchased && (
                    <button onClick={() => handleBusPurchase(business.name)}>Purchase For {moneyFormat(business.cost)}</button>
                )}
            </div>
        </div>
    )
}