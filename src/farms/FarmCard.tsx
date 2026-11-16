import { moneyFormat } from "../utils/formatter";
import type { farm, farmTypes } from "./farm";
import wheat from "../assets/farmIcons/WheatFarm.png"
import banana from "../assets/farmIcons/BananaFarm.png"
import dairy from "../assets/farmIcons/DairyFarm.png"
import cocoa from "../assets/farmIcons/Cocoa.png"
import fruits from "../assets/farmIcons/fruitFarm.png"
import sugar from "../assets/farmIcons/SugarFarm.png"
import cheese from "../assets/farmIcons/CheeseFarm.png"
import pistachio from "../assets/farmIcons/PistachioFarm.png"
import "./FarmCards.css"
interface FarmCard {
    farm: farm,
    handlePurchase: (farmType: farmTypes, upgrade: string) => void,
}

function makeFarmTypeNames(farmType: farmTypes): string {
    if (farmType === "banana")
        return "Bananas"
    if (farmType === "dairy")
        return "Dairy"
    if (farmType === "cocoa")
        return "Cocoa"
    if (farmType === "fruit")
        return "Fruits"
    if (farmType === "flourMill")
        return "Wheat"
    if (farmType === "sugarFarm")
        return "Sugar"
    if(farmType==="cheese")
        return "Cheese"
    if(farmType==="pistachio")
        return "Pistachios"
    return ""
}
export function makeFarmNames(farmType: farmTypes) {
    if (farmType === "banana")
        return "Banana Farm"
    if (farmType === "dairy")
        return "Dairy Farm"
    if (farmType === "cocoa")
        return "Cocoa Farm"
    if (farmType === "fruit")
        return "Fruit Farm"
    if (farmType === "flourMill")
        return "Wheat Farm"
    if (farmType === "sugarFarm")
        return "Sugar Farm"
    if(farmType==="cheese")
        return "Cheese Factory"
    if(farmType==="pistachio")
        return "Pistachio Farm"
    return ""
}

function chooseImg(farmType: farmTypes) {
    if (farmType === "banana")
        return banana
    if (farmType === "dairy")
        return dairy
    if (farmType === "cocoa")
        return cocoa
    if (farmType === "fruit")
        return fruits
    if (farmType === "flourMill")
        return wheat
    if(farmType==="sugarFarm")
        return sugar
    if(farmType==="cheese")
        return cheese
    if(farmType==="pistachio")
        return pistachio
    return ""
}

export function FarmCard({ farm, handlePurchase }: FarmCard) {
    return (
        <div className="farm">
            <details className="farmDets">
                <summary className="farmSum">
                    <div>
                        <h3 className="farmName">{makeFarmNames(farm.type)}</h3>
                        <p>Produces: {makeFarmTypeNames(farm.type)}</p>
                    </div>
                    <img className="logo" src={chooseImg(farm.type)}></img>
                </summary>
                <div className="farmUpgrades">
                    {farm.upgrades.map(upgrade => (
                        <div key={upgrade.name} className="farmUpgrade">
                            <details>
                                <summary>
                                    <h3 className="upgradeName">{upgrade.name}</h3>
                                </summary>
                                <div className="upInfo">
                                <p>{upgrade.desc}</p>
                                <p>{moneyFormat(upgrade.cost)}</p>
                                </div>
                                <button disabled={upgrade.purchased} className="upgradeButton" onClick={() => handlePurchase(farm.type, upgrade.name)}>
                                    {upgrade.purchased ? "Purchased" : "Purchase"}
                                </button>
                            </details>
                        </div>
                    ))}
                </div>
            </details>
        </div>
    )
}