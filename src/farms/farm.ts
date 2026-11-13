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
            name: "tractors",
            cost: 50,
            purchased: false,
            desc: "Harvest Your Bananas 20% Faster, Make Your Desserts 20% Faster",
            prodSpeed: 1.2,
        },
        {
            name: "refinement",
            cost: 70,
            purchased: false,
            desc: "Extra Radioactive Bananas. Sell Your Splits For 5% Extra.",
            income: 1.05
        },
        {
            name: "organic",
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
            name: "feed",
            cost: 50,
            purchased: false,
            desc: "Better Feed = Better Milk = 10% More Expensive Ice Cream",
            income: 1.1,
        },
        {
            name: "milkTower",
            cost: 70,
            purchased: false,
            desc: "Creamed Milk On Demand. 5% Better Income",
            income: 1.05
        },
        {
            name: "premium",
            cost: 150,
            purchased: false,
            desc: "Grade A Milk Gives You A 5% Extra Tip Chance.",
            organic: 1.05
        },
        {
            name: "automation",
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
            name: "soil",
            cost: 500,
            purchased: false,
            desc: "Better Soil To Grow Crops On. 10% extra income",
            income: 1.1,
        },
        {
            name: "cocoaProcessing",
            cost: 700,
            purchased: false,
            desc: "Process Your Cocoa On Site for 10% fast produciton",
            prodSpeed: 1.1
        },
        {
            name: "organic",
            cost: 1150,
            purchased: false,
            desc: "Organic Cocoa Beans Give You A 8% Extra Tipping Chance.",
            organic: 1.08
        },
        {
            name: "harvesters",
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
            name: "soil",
            cost: 15000,
            purchased: false,
            desc: "Better Soil To Grow Crops On. 10% extra income",
            income: 1.1,
        },
        {
            name: "moreSunlight",
            cost: 17000,
            purchased: false,
            desc: "More Sunlight Makes Your Crops Grow 15% Faster",
            prodSpeed: 1.15
        },
        {
            name: "organic",
            cost: 21150,
            purchased: false,
            desc: "Organic Fruit Gives You A 15% Extra Tipping Chance.",
            organic: 1.15
        },
        {
            name: "harvesters",
            cost: 25550,
            purchased: false,
            desc: "Massive Machines Which Harvest Fruits 20% Faster.",
            prodSpeed: 1.2
        },
        {
            name: "irrigation",
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
            name: "betterGrain",
            cost: 150000,
            purchased: false,
            desc: "Better Grain Seeds. 8% extra income",
            income: 1.08,
        },
        {
            name: "moreSunlight",
            cost: 170000,
            purchased: false,
            desc: "More Sunlight Makes Your Crops Grow 15% Faster",
            prodSpeed: 1.15
        },
        {
            name: "organic",
            cost: 210150,
            purchased: false,
            desc: "Organic Wheat Gives You A 15% Extra Tipping Chance.",
            organic: 1.15
        },
        {
            name: "harvesters",
            cost: 255550,
            purchased: false,
            desc: "Massive Machines Which Harvest Wheat 20% Faster.",
            prodSpeed: 1.2
        },
        {
            name: "irrigation",
            cost: 300000,
            purchased: false,
            desc: "Irrigation Systems To Grow Wheat 50% Faster",
            prodSpeed: 1.5
        },
        {
            name: "refinement",
            cost: 500000,
            purchased: false,
            desc: "Refine Your Wheat For A 20% Extra Tipping Chance & 15% Extra Income At The Expense of 7.5% Slower Production",
            organic: 1.2,
            income: 1.15,
            prodSpeed: 0.925
        }
    ]
}