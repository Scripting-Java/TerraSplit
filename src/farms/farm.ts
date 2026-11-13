import type { business } from "../businesses/businessData"

export interface upgrade {
    name: string,
    cost: number,
    purchased: boolean,
    prodSpeed?: number,
    desc: string,
    income?: number,
    organic?: number
}
export type farmTypes = "banana" | "dairy" | "cocoa" | "fruit" | "flourMill"

export interface farm {
    name: string,
    type: farmTypes,
    upgrades: upgrade[]
}

export const bananaFarm: farm = {
    name: "bananaFarm",
    type: "banana",
    upgrades: [
        {
            name: "Tractors",
            cost: 50,
            purchased: false,
            desc: "Harvest Your Bananas 20% Faster, Make Your Desserts 20% Faster",
            prodSpeed: 1.2,
        },
        {
            name: "Quality Control",
            cost: 70,
            purchased: false,
            desc: "Extra Radioactive Bananas. Sell Your Splits For 5% Extra.",
            income: 1.05
        },
        {
            name: "Organic",
            cost: 150,
            purchased: false,
            desc: "Organic Crops Give You A 5% Extra Tip Chance.",
            organic: 1.05
        }
    ]
}

export const dairyFarm: farm = {
    name: "dairyFarm",
    type: "dairy",
    upgrades: [
        {
            name: "Better Feed",
            cost: 50,
            purchased: false,
            desc: "Better Feed = Better Milk = 10% More Expensive Ice Cream",
            income: 1.1,
        },
        {
            name: "Milk Silo",
            cost: 70,
            purchased: false,
            desc: "Creamed Milk On Demand. 5% Better Income",
            income: 1.05
        },
        {
            name: "Premium Cows",
            cost: 150,
            purchased: false,
            desc: "Grade A Milk Gives You A 5% Extra Tip Chance.",
            organic: 1.05
        },
        {
            name: "Robots",
            cost: 220,
            purchased: false,
            desc: "Automated Milk Production. 20% Faster Ice Cream Production.",
            prodSpeed: 1.2
        },
    ]
}

export const cocoaFarm: farm = {
    name: "cocoaFarm",
    type: "cocoa",
    upgrades: [
        {
            name: "Better Soil",
            cost: 500,
            purchased: false,
            desc: "Better Soil To Grow Crops On. 10% extra income",
            income: 1.1,
        },
        {
            name: "Processing",
            cost: 700,
            purchased: false,
            desc: "Process Your Cocoa On Site for 10% fast produciton",
            prodSpeed: 1.1
        },
        {
            name: "No Pesticides",
            cost: 1150,
            purchased: false,
            desc: "Organic Cocoa Beans Give You A 8% Extra Tipping Chance.",
            organic: 1.08
        },
        {
            name: "Harvesters",
            cost: 2220,
            purchased: false,
            desc: "Massive Machines Which Harvest Cocoa 20% Faster.",
            prodSpeed: 1.2
        },
    ]
}

export const fruitFarm: farm = {
    name: "fruitFarm",
    type: "fruit",
    upgrades: [
        {
            name: "Better Soil",
            cost: 15000,
            purchased: false,
            desc: "Better Soil To Grow Crops On. 10% extra income",
            income: 1.1,
        },
        {
            name: "More Sunlight",
            cost: 17000,
            purchased: false,
            desc: "More Sunlight Makes Your Crops Grow 15% Faster",
            prodSpeed: 1.15
        },
        {
            name: "Organic",
            cost: 21150,
            purchased: false,
            desc: "Organic Fruit Gives You A 15% Extra Tipping Chance.",
            organic: 1.15
        },
        {
            name: "Harvesters",
            cost: 25550,
            purchased: false,
            desc: "Massive Machines Which Harvest Fruits 20% Faster.",
            prodSpeed: 1.2
        },
        {
            name: "Irrigation",
            cost: 30000,
            purchased: false,
            desc: "Irrigation Systems To Grow Fruits 25% Faster",
            prodSpeed: 1.25
        }
    ]
}

export const flourMill: farm = {
    name: "flourMill",
    type: "flourMill",
    upgrades: [
        {
            name: "Better Seeds",
            cost: 150000,
            purchased: false,
            desc: "Better Grain Seeds. 8% extra income",
            income: 1.08,
        },
        {
            name: "Less Shade",
            cost: 170000,
            purchased: false,
            desc: "More Sunlight Makes Your Crops Grow 15% Faster",
            prodSpeed: 1.15
        },
        {
            name: "No Pesticides",
            cost: 210150,
            purchased: false,
            desc: "Organic Wheat Gives You A 15% Extra Tipping Chance.",
            organic: 1.15
        },
        {
            name: "Harvesters",
            cost: 255550,
            purchased: false,
            desc: "Massive Machines Which Harvest Wheat 20% Faster.",
            prodSpeed: 1.2
        },
        {
            name: "Irrigation",
            cost: 300000,
            purchased: false,
            desc: "Irrigation Systems To Grow Wheat 25% Faster",
            prodSpeed: 1.25
        },
        {
            name: "Milling",
            cost: 500000,
            purchased: false,
            desc: "Refine Your Wheat For A 20% Extra Tipping Chance & 15% Extra Income At The Expense of 7.5% Slower Production",
            organic: 1.2,
            income: 1.15,
            prodSpeed: 0.925
        }
    ]
}


export function purchaseFarmUpgrade(farmType: farmTypes, upgradeName: string, businesses: business[], money: number) {
    const farms = businesses.map(bus => bus.farm)
    const i = businesses.findIndex(bus => bus.farm.type === farmType)
    const farm = farms.find(temp => temp.type === farmType)
    if (!farm)
        return { businesses: businesses, money: money }
    const upgrade = farm.upgrades.find(temp => temp.name === upgradeName)
    if (!upgrade || upgrade.cost > money || upgrade.purchased)
        return { businesses: businesses, money: money }
    return {
        businesses: businesses.map((bus, index) => {
            if (index !== i)
                return bus
            return {
                 ...bus, 
                 farm: { ...bus.farm, upgrades: bus.farm.upgrades.map(temp => temp.name === upgradeName ? { ...temp , purchased:true} : temp) } }
        }), money: money - upgrade.cost
    }
}

export function getFarmMultipliers(farm:farm){
    let prodSpeed = 1
    let income = 1
    let organic = 1
    const upgrades = farm.upgrades
    for(const upgrade of upgrades){
        if(upgrade.purchased){
            if(upgrade.prodSpeed)
                prodSpeed/=upgrade.prodSpeed
            if(upgrade.income)
                income*=upgrade.income
            if(upgrade.organic)
                organic+=upgrade.organic-1
        }
    }
    return {prod:prodSpeed,inc:income,org:organic}
}