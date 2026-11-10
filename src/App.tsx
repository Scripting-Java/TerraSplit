import { useState, useEffect } from 'react'
import { basicDesserts, type dessertTypes } from './desserts/dessert'
import { makeCustomers } from './sell/customer'
import './App.css'
import { iceCream } from './desserts/iceCream'
import { bSplit } from './desserts/bSplit'
import { chocolate } from './desserts/chocolate'
import { sellDessert } from './sell/sellDessert'


function App() {
  const [money, setMoney] = useState(0)
  const [basicInventory, setBasicInventory] = useState<Record<dessertTypes, number>>({ bSplit: 0, iceCream: 0, chocolate: 0 })
  const [storage, setStorage] = useState(20)
  //const [shopLevel,setShopLevel] = useState(1)
  const inv = (basicInventory.bSplit + basicInventory.iceCream + basicInventory.chocolate)

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

  useEffect(()=>{
    const timer = setTimeout(()=>{
      const temp = Math.floor(Math.random()*storage*1.5)
      const cust = makeCustomers(temp)
      console.log(cust.length, "customers were made")
      for(let i =0;i<basicDesserts.length;i++){
        const type = basicDesserts[i].type
        const count = basicInventory[type]
        const money = sellDessert(basicDesserts[i].type,cust,count).money
        const bought = sellDessert(basicDesserts[i].type,cust,count).count
        setMoney(prev=>prev+money)
        setBasicInventory(prev=>({...prev,[type]:prev[type]-bought}))
        console.log("Bought an item")
      }
    }, 12*Math.random()*1000)
    return () => clearTimeout(timer)
  },[])

  return (
    <>
      <div>
        Money: {money}
      </div>
      <div>
        Storage Filled: {inv}/{storage}
      </div>
      <div>
        <button onClick={() => setBasicInventory({ ...basicInventory, iceCream: basicInventory.iceCream + 1 })}>
          Add Ice Cream</button>
        <p>{basicInventory.iceCream} Ice Cream</p>
      </div>
      <div>
        <button onClick={() => setBasicInventory({ ...basicInventory, bSplit: basicInventory.bSplit + 1 })}>
          Add Banana Split</button>
        <p>{basicInventory.bSplit} Banana Split</p>
      </div>
      <div>
        <button onClick={() => setBasicInventory({ ...basicInventory, chocolate: basicInventory.chocolate + 1 })}>
          Add Ice Cream</button>
        <p>{basicInventory.chocolate} Chocolate</p>
      </div>
    </>
  )
}

export default App
