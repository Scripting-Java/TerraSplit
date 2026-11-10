import { useState } from 'react'
import type { dessertTypes } from './desserts/dessert'

import './App.css'


function App() {
  const [money, setMoney] = useState(0)
  const [basicInventory, setBasicInventory] = useState<Record<dessertTypes,number>>({bSplit:0,iceCream:0,chocolate:0})
  return (
    <>
    <div>
      {money}
    </div>
    <div>
      <button onClick={()=>setBasicInventory({...basicInventory, iceCream:basicInventory.iceCream+1})}>
      Add Ice Cream</button>
      <p>{basicInventory.iceCream} Ice Cream</p>
    </div>
    <div>
      <button onClick={()=>setBasicInventory({...basicInventory, bSplit:basicInventory.bSplit+1})}>
      Add </button>
      <p>{basicInventory.bSplit} Banana Split</p>
    </div>
    <div>
      <button onClick={()=>setBasicInventory({...basicInventory, chocolate:basicInventory.chocolate+1})}>
      Add Ice Cream</button>
      <p>{basicInventory.chocolate} Chocolate</p>
    </div>
  </>
  )
}

export default App
