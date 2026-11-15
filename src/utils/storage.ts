export function calcTierStore(tier:number, tiers:number[], storage:number):number{
    const tempTiers = tiers.filter((t,i)=>tiers.indexOf(t)===i)
    const  diffTiers = tempTiers.sort((a,b)=>a-b)

    if(diffTiers.length<=1)
        return storage
    const index = diffTiers.indexOf(tier)
    if(index===0)
        return Math.floor(storage*0.1)
    if(index===diffTiers.length-1)
        return Math.floor(storage*0.6)
    return Math.floor(storage*(0.3/diffTiers.length-2))   
}