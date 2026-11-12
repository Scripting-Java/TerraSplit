import { useState, useEffect, useRef } from 'react'
import {dessertMenu, type dessertTypes } from './desserts/dessert'
import { makeCustomers } from './sell/customer'
import './App.css'
import { sellDessert } from './sell/sellDessert'


function App() {
  const [money, setMoney] = useState(0)
  const invInit: Record<dessertTypes, number> = {
    bSplit: 0,
    iceCream: 0,
    chocolate: 0,
    tart: 0,
    pie: 0
  }
  const [inventory, setInventory] = useState<Record<dessertTypes, number>>(invInit)
  const [storage, setStorage] = useState(20)
  const [shopLevel, setShopLevel] = useState(1)

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



  useEffect(() => {
    const timers = dessertMenu.map(dessert => {
      return setInterval(() => {
        setInventory(prev => {
          if (!checkStorage(prev))
            return prev
          return { ...prev, [dessert.type]: prev[dessert.type] + 1 }
        })
      }, dessert.prodDur * 1000)
    })
    return () => {
      for (let i = 0; i < timers.length; i++) {
        (clearInterval(timers[i]))
      }
    }
  }, [])

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

      for (let i = 0; i < dessertMenu.length; i++) {
        const type = dessertMenu[i].type
        const count = invRef.current[type]
        const sold = sellDessert(dessertMenu[i].type, cust, count)
        const money = sold.money
        const bought = sold.count
        setMoney(prev => prev + money)
        setInventory(prev => ({ ...prev, [type]: prev[type] - bought }))
        console.log("Sold", bought, type, "for", money)
      }

      const delay = Math.floor(Math.random() * 13 + 12) * 1000
      timer = setTimeout(custCycle, delay)
    }
    timer = setTimeout(custCycle,Math.floor(Math.random() * 13 + 12) * 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <h1>
        Money: {money}
      </h1>
      <div>
        Storage Filled: {invCount(inventory)}/{storage}
      </div>
      <div>
        <p>{inventory.iceCream} Ice Cream</p>
      </div>
      <div>
        <p>{inventory.bSplit} Banana Split</p>
      </div>
      <div>
        <p>{inventory.chocolate} Chocolate</p>
      </div>
      <div>
        <p>{inventory.tart} Tart</p>
      </div>
      <div>
        <p>{inventory.pie} Pie</p>
      </div>
      <div>

      </div>
    </>
  )
}

export default App
