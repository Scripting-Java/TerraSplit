import "./businesscard.css"
import type { business } from "./businessData";
import { dessertMenu, type dessertTypes } from "../desserts/dessert";
import { formatTime, moneyFormat } from "../utils/formatter";
import { FarmCard } from "../farms/FarmCard";
import { getFarmMultipliers, type farmTypes } from "../farms/farm";
import bSplit from "../assets/busIcons/BananaSplit.png"
import { getBakerCost } from "../utils/baker";

interface BusinessCard {
    business: business,
    handleFarmPurchase: (farmType: farmTypes, upgrade: string) => void,
    handleBusPurchase: (name: string) => void,
    handleBusUnlock: (name: string) => void,
    handleHire: (business: business) => void,
    money: number
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
    if (des === "baklava")
        return "Baklava"
    if (des === "cheesecake")
        return "Cheesecake"
}

function getLogo(des: dessertTypes) {
    if (des === "bSplit")
        return bSplit
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
    if (des === "baklava")
        return "Baklava"
    if (des === "cheesecake")
        return "Cheesecake"

}

export function BusinessCard({ business, handleFarmPurchase, handleBusPurchase, handleBusUnlock, handleHire, money }: BusinessCard) {
    const dessert = dessertMenu.find(temp => temp.type === business.dessert)
    if (!dessert)
        return null
    const mult = getFarmMultipliers(business.farm)
    return (
        <div className="business">
            <details>
                <summary className="busName">{business.name}</summary>
                {business.purchased && (
                    <div className="busInfo">
                        <details className="baker">
                            <summary>Info</summary>
                            <p>Produces: {makeDessertNames(dessert.type)}</p>
                            <p>Production Time: {formatTime(dessert.prodDur * mult.prod)} seconds</p>
                            <p>Sale Value: {moneyFormat(dessert.prodValue * mult.inc)}</p>
                        </details>
                        <details>
                            <summary className="baker">Bakers</summary>
                            <div className="baker">
                                <p>{business.bakers} {business.bakers > 1 ? ("Bakers") : ("Baker")}</p>
                                <p>Next Baker: {moneyFormat(getBakerCost(business))}</p>
                            </div>
                            <button className="bakerButton" disabled={money < getBakerCost(business)} onClick={() => handleHire(business)}>Hire Baker</button>
                        </details>
                    </div>
                )}
            </details>
            <div className={`busMain ${!business.purchased ? "not" : ""}`}>
                <img className="busLogo" src={getLogo(business.dessert)}></img>
                {business.purchased && (
                    <div className="farmInfo">
                        <FarmCard farm={business.farm} handlePurchase={handleFarmPurchase}></FarmCard>
                    </div>
                )}
                {!business.unlocked && (
                    <button className="busbutton" onClick={() => handleBusUnlock(business.name)}>Unlock For {moneyFormat(business.unlockCost)}</button>
                )}
                {business.unlocked && !business.purchased && (
                    <button className="busbutton" onClick={() => handleBusPurchase(business.name)}>Purchase For {moneyFormat(business.cost)}</button>
                )}
            </div>
        </div>
    )
}