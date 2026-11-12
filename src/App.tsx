import { useState, useEffect, useRef } from 'react'
import { basicDesserts, type dessertTypes } from './desserts/dessert'
import { makeCustomers } from './sell/customer'
import './App.css'
import { iceCream } from './desserts/basic/iceCream'
import { bSplit } from './desserts/basic/bSplit'
import { chocolate } from './desserts/basic/chocolate'
import { sellDessert } from './sell/sellDessert'


function App() {
  const [money, setMoney] = useState(0)
  const [basicInventory, setBasicInventory] = useState<Record<dessertTypes, number>>({ bSplit: 0, iceCream: 0, chocolate: 0 })
  const [storage, setStorage] = useState(20)
  const [shopLevel,setShopLevel] = useState(1)
  const inv = (basicInventory.bSplit + basicInventory.iceCream + basicInventory.chocolate)
  const invRef = useRef(basicInventory)

  function checkStorage(inventory: Record<dessertTypes, number>) {
    const total = inventory.bSplit + inventory.iceCream + inventory.chocolate
    return total < storage
  }


  //iceCream
  useEffect(() => {
    const timer = setInterval(() => {
      setBasicInventory(prev => {
        if (!checkStorage(prev))
          return prev
        return { ...prev, iceCream: prev.iceCream + 1 }
      })
    }, iceCream.prodDur * 1000)
    return () => clearInterval(timer)
  }, [])

  //bSplit
  useEffect(() => {
    const timer = setInterval(() => {
      setBasicInventory(prev => {
        if (!checkStorage(prev))
          return prev
        return { ...prev, bSplit: prev.bSplit + 1 }
      })
    }, bSplit.prodDur * 1000)
    return () => clearInterval(timer)
  }, [])

  //chocolate
  useEffect(() => {
    const timer = setInterval(() => {
      setBasicInventory(prev => {
        if (!checkStorage(prev))
          return prev
        return { ...prev, chocolate: prev.chocolate + 1 }
      })
    }, chocolate.prodDur * 1000)
    return () => clearInterval(timer)
  }, [])
  
  //inventory 
  useEffect(()=>{
    invRef.current=basicInventory
  },[basicInventory])

  //selling
  useEffect(() => {
    const timer = setInterval(()=>{
      const temp = Math.floor(Math.random() * storage * 0.45 + 0.55*storage)
      const cust = makeCustomers(temp, shopLevel)
      console.log(cust.length, "customers were made")
      for (let i = 0; i < basicDesserts.length; i++) {
        const type = basicDesserts[i].type
        const count = invRef.current[type]
        const sold = sellDessert(basicDesserts[i].type, cust, count)
        const money = sold.money
        const bought = sold.count
        setMoney(prev => prev + money)
        setBasicInventory(prev => ({ ...prev, [type]: prev[type] - bought }))
        console.log("Sold", bought, type, "for", money)
      }
    }, Math.floor(Math.random()*12+12)*1000)
    return ()=>clearInterval(timer)
  }, [])

  return (
    <>
      <h1>
        Money: {money}
      </h1>
      <div>
        Storage Filled: {inv}/{storage}
      </div>
      <div>
        <p>{basicInventory.iceCream} Ice Cream</p>
      </div>
      <div>
        <p>{basicInventory.bSplit} Banana Split</p>
      </div>
      <div>
        <p>{basicInventory.chocolate} Chocolate</p>
      </div>
    </>
  )
}

export default App
