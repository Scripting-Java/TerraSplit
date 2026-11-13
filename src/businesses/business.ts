import type { business, businessNames } from "./businessData";
export function unlockBusiness(name: businessNames, businesses: business[], money: number, shopLvl: number) {
    const target = businesses.find(bus => bus.name === name)
    if (!target || target.unlocked || shopLvl < target.levelReq || money < target.unlockCost)
        return { money: money, businesses: businesses }
    return { money: money - target.unlockCost, businesses: businesses.map(bus => bus.name === name ? { ...bus, unlocked: true } : bus) }
}
export function purchaseBusiness(name: businessNames, businesses: business[], money: number, shopLvl: number) {
    const target = businesses.find(bus => bus.name === name)
    if (!target || target.purchased || shopLvl < target.levelReq || money < target.cost|| !target.unlocked)
        return { money: money, businesses: businesses }
    return { money: money - target.cost, businesses: businesses.map(bus => bus.name === name ? { ...bus, purchased: true } : bus) }
}
export function getAvailableBusinesses(businesses:business[]): business[]{
    return businesses.filter(bus=>bus.unlocked && !bus.purchased)
}
