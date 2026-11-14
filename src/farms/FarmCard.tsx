import { moneyFormat } from "../utils/formatter";
import type { farm, farmTypes } from "./farm";
import wheat from "../assets/farmIcons/WheatFarm.png"
import banana from "../assets/farmIcons/BananaFarm.png"
import "./FarmCards.css"
interface FarmCard {
    farm: farm,
    handlePurchase:(farmType:farmTypes,upgrade:string)=>void,
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
    return ""
}
function makeFarmNames(farmType: farmTypes) {
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
    return ""
}

function chooseImg(farmType:farmTypes){
    if (farmType === "banana")
        return banana
    if (farmType === "dairy")
        return ""
    if (farmType === "cocoa")
        return ""
    if (farmType === "fruit")
        return ""
    if (farmType === "flourMill")
        return wheat
    return ""
}

export function FarmCard({ farm, handlePurchase }: FarmCard) {
    return (
           <div className="farm">
            <details className="farmDets">
                <summary className="farmSum">
                    <div>
                    <h3>{makeFarmNames(farm.type)}</h3>
                    <p>Produces: {makeFarmTypeNames(farm.type)}</p>
                    </div>
                    <img className="logo" src={chooseImg(farm.type)}></img>
                </summary>
                <div className="farmUpgrades">
                    {farm.upgrades.map(upgrade => (
                        <div key={upgrade.name} className="farmUpgrade">
                            <details>
                                <summary>
                                    <h3>{upgrade.name}</h3>
                                </summary>
                                <p>{upgrade.desc}</p>
                                <p>{moneyFormat(upgrade.cost)}</p>
                                <button disabled={upgrade.purchased} className="upgradeButton"onClick={()=>handlePurchase(farm.type,upgrade.name)}>
                                    {upgrade.purchased?"Purchased":"Purchase"}
                                </button>
                            </details>
                        </div>
                    ))}
                </div>
            </details>
        </div>
    )
}