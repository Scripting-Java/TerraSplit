import { moneyFormat } from "../utils/formatter";
import type { farm, farmTypes } from "./farm";

interface FarmCard {
    farm: farm
}

function makeFarmTypeNames(farmType: farmTypes): string {
    if (farmType === "banana")
        return "Banana"
    if (farmType === "dairy")
        return "Dairy"
    if (farmType === "cocoa")
        return "Cocoa"
    if (farmType === "fruit")
        return "Fruit"
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

export function FarmCard({ farm }: FarmCard) {
    return (
        <div>
            <h3>{makeFarmNames(farm.type)}</h3>
            <img className="logo" src=""></img>
            <h3>{makeFarmTypeNames(farm.type)}</h3>
            <div>
                {farm.upgrades.map(upgrade => (
                    <div key={upgrade.name}>
                        <h3>{upgrade.name}</h3>
                        <p>{upgrade.desc}</p>
                        <p>{moneyFormat(upgrade.cost)}</p>
                        <p>{upgrade.purchased ? "Purchased" : "Not Purchased"}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}