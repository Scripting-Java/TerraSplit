import { useState, useEffect, useRef } from 'react'
import { dessertMenu, type dessertTypes } from './desserts/dessert'
import { makeCustomers } from './sell/customer'
import './App.css'
import { sellDessert } from './sell/sellDessert'
import { businesses, type business, type businessNames } from './businesses/businessData'
import { unlockBusiness, purchaseBusiness, getAvailableBusinesses } from './businesses/business'
import { moneyFormat } from './utils/formatter'
import { getFarmMultipliers, purchaseFarmUpgrade, type farmTypes } from './farms/farm'
import { BusinessCard } from './businesses/BusinessCard'
import { reqs } from './utils/shopLevels'

function App() {
  const [money, setMoney] = useState(0)
  const invInit: Record<dessertTypes, number> = {
    bSplit: 0,
    iceCream: 0,
    chocolate: 0,
    tart: 0,
    pie: 0,
    cake: 0
  }
  const [inventory, setInventory] = useState<Record<dessertTypes, number>>(invInit)
  const [storage, setStorage] = useState(20)
  const [shopLevel, setShopLevel] = useState(1)
  const [shops, setShops] = useState(businesses)
  const [custServed, setCustServed] = useState(0)
  const next = reqs.find(req => req.level === shopLevel + 1)

  function invCount(inventory: Record<dessertTypes, number>): number {
    let temp = 0
    for (const dessert of dessertMenu) {
      temp += inventory[dessert.type]
    }
    return temp
  }


  const invRef = useRef(inventory)
  function checkStorage(inventory: Record<dessertTypes, number>) {
    const total = invCount(inventory)
    return total < storage
  }

  //production
  useEffect(() => {
    const timers = dessertMenu.flatMap(dessert => {
      const shop = shops.find(bus => bus.dessert === dessert.type)
      if (!shop || !shop.purchased)
        return []
      const mult = getFarmMultipliers(shop.farm)
      return setInterval(() => {
        setInventory(prev => {
          if (!checkStorage(prev))
            return prev
          return { ...prev, [dessert.type]: prev[dessert.type] + 1 }
        })
      }, dessert.prodDur * 1000 * mult.prod)
    })
    return () => {
      for (let i = 0; i < timers.length; i++) {
        (clearInterval(timers[i]))
      }
    }
  }, [shops])


  //inventory 
  useEffect(() => {
    invRef.current = inventory
  }, [inventory])

  //selling
  useEffect(() => {
    let timer: number
    function custCycle() {
      const temp = Math.floor(Math.random() * storage * 0.45 + 0.55 * storage)
      const cust = makeCustomers(temp, shopLevel)

      console.log(cust.length, "customers were made")
      let served = 0
      for (let i = 0; i < dessertMenu.length; i++) {
        const type = dessertMenu[i].type
        const count = invRef.current[type]
        const shop = shops.find(bus => bus.dessert === type)
        if (!shop || !shop.purchased)
          continue
        const mult = getFarmMultipliers(shop.farm)
        const sold = sellDessert(dessertMenu[i].type, cust, count, mult.inc, mult.org - 1)
        served += sold.count
        const money = sold.money
        const bought = sold.count
        setMoney(prev => prev + money)
        setInventory(prev => ({ ...prev, [type]: prev[type] - bought }))
        console.log("Sold", bought, type, "for", money)
      }
      setCustServed(prev => prev + served)
      const delay = Math.floor(Math.random() * 13 + 12) * 1000
      timer = setTimeout(custCycle, delay)
    }
    timer = setTimeout(custCycle, Math.floor(Math.random() * 13 + 12) * 1000)
    return () => clearTimeout(timer)
  }, [shops, storage, shopLevel])

  function handleBusinessUnlock(business: businessNames) {
    const result = unlockBusiness(business, shops, money, shopLevel)
    setMoney(result.money)
    setShops(result.businesses)
  }

  function handleBusinessPurchase(business: businessNames) {
    const result = purchaseBusiness(business, shops, money, shopLevel)
    setMoney(result.money)
    setShops(result.businesses)
  }

  function findBusinesses() {
    const unlocks = getAvailableBusinesses(shops)
  }

  function handleUpgrade(farm: farmTypes, upgrade: string) {
    const result = purchaseFarmUpgrade(farm, upgrade, shops, money)
    setShops(result.businesses)
    setMoney(result.money)
  }

  function handleShopLevel(shopLevel: number, custServed: number, businesses: business[]): boolean {
    const next = reqs.find(req => req.level === shopLevel + 1)
    if (!next || custServed < next.customers)
      return false
    const tempBusiness = businesses.find(bus => bus.farm.type === next.farmType)
    if (!tempBusiness || !tempBusiness.purchased)
      return false
    for (const upgrade of tempBusiness.farm.upgrades) {
      if (!upgrade.purchased)
        return false
    }
    return true
  }

  //level
  useEffect(() => {
    if (handleShopLevel(shopLevel, custServed, shops)) {
      setShopLevel(prev => prev + 1)
      setStorage(prev => prev * 2)
    }
  }, [shopLevel, custServed, shops])

  return (
    <>
      <h1>
        Money: {moneyFormat(money)}
      </h1>
      <div>
        Storage Filled: {invCount(inventory)}/{storage}
      </div>
      <div>Storage At Next Level: {storage * 2}</div>
      <div>
        Shop Level: {shopLevel}
      </div>
      <div>
        <h3>Next Level Requirements</h3>
        <p>Customers Served: {custServed}/{next ? (next.customers) : (reqs.find(req => req.level === shopLevel)?.customers)}</p>
      </div>
      <div>
        {shops.map(shop => (
          <BusinessCard key={shop.name} business={shop} handleFarmPurchase={handleUpgrade} handleBusPurchase={handleBusinessPurchase} handleBusUnlock={handleBusinessUnlock}></BusinessCard>
        ))}
      </div>
    </>
  )
}

export default App
