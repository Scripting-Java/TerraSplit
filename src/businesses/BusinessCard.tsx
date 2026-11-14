import "./businesscard.css"
import type { business } from "./businessData";
import { dessertMenu } from "../desserts/dessert";
import { formatTime, moneyFormat } from "../utils/formatter";
import { FarmCard } from "../farms/FarmCard";
import { getFarmMultipliers, type farmTypes } from "../farms/farm";

interface BusinessCard {
    business: business,
    handleFarmPurchase: (farmType: farmTypes, upgrade: string) => void,
    handleBusPurchase: (name: string) => void,
    handleBusUnlock: (name: string) => void
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
                    <p>Produces: {dessert.type}</p>
                    <p>Production Time: {formatTime(dessert.prodDur * mult.prod)} seconds</p>
                    <p>Sale Value: {moneyFormat(dessert.prodValue * mult.inc)}</p>
                </div>
            )}
            {!business.unlocked && (
                <button onClick={() => handleBusUnlock(business.name)}>Unlock For {moneyFormat(business.unlockCost)}</button>
            )}
            {business.unlocked && !business.purchased && (
                <button onClick={() => handleBusPurchase(business.name)}>Purchase For {moneyFormat(business.cost)}</button>
            )}
            {business.purchased && (
                <FarmCard farm={business.farm} handlePurchase={handleFarmPurchase}></FarmCard>
            )}
        </div>
    )
}