import { useState, useEffect } from 'react'
import type { dessertTypes } from './desserts/dessert'

import './App.css'
import { iceCream } from './desserts/iceCream'
import { bSplit } from './desserts/bSplit'
import { chocolate } from './desserts/chocolate'


function App() {
  const [money, setMoney] = useState(0)
  const [basicInventory, setBasicInventory] = useState<Record<dessertTypes, number>>({ bSplit: 0, iceCream: 0, chocolate: 0 })
  const [storage, setStorage] = useState(20)
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
