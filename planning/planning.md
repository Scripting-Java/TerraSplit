# TerraSplit
Dessert shop idle management game
Start w/ a farm and a small store and expand your production to take over the dessert industry.

## Customers
Customers randomly show up on a 12-24 second interval, so you might need to store your desserts. See storage below.
Customers also might want a specific item(they'll prefer cheaper items over more expensive items)
There is anywhere from 0.85 * storage to 1.5 * storage customers.
Each customer is going to buy exactly 1 item. 
They can try to buy items you don't have yet, in which case no sale is made.


## Industry:
Start with a banana farm & a shop
You can only make banana splits. Every 3 seconds, you make 1 banana split which sells for $7.

Those are just placeholder values

As you accumulate money, you can upgrade your shop:
- Bigger counter: +15% production speed
- Table cloths: +10% chance for higher tier sales
- Bigger windows: +5% tipping chance
- Better Kitchen: +5% income

These are infinitely upgradable, but get exponentially harder.
After unlocking each one(as in one bigger counter, one table cloth, one bigger windows, and one better kitchen), your shop level goes up.
When your shop level goes up, you're storage shows up. Upgrades are exponential.


You can also expand to new farms:
- Dairy Farms = Ice Cream -> Every 2 seconds you make 1 Ice cream which sells for $15
- Cocoa Farms = Chocolate -> Every 5 seconds you make 1 chocolate which sells for $50
- I'll add more farms later

You can also upgrade your farms:
- Tractors = +10% production speed
- Refinement = +2.5% income
- Organic = +5% tipping chance


### Farms:
Farms give you effectively infinite materials. The upgrades above are listed for your "bakery" itself. So +10% production speed just means your banana splits get made 10% faster.

You can also buy more staff(bakers) to produce goods:
- So buying an extra baker for the banana split would produce 2 banana splits every second. 


## Tipping:
A 5% chance to earn 20% extra

## Storage:
- Depending on your shop level you get storage.
- You cannot hold more than your storage at a time. This includes all goods.
- So if you only have 20 storage, and you're making 5 desserts a second and your customers will arrive in 5 seconds, you'll lose 5 desserts.
- If you're production is full, you stop making goods.
- You start w/ 20 storage slots(20 desserts)
- Storage formula: 2X each level


## Values(Planning)
|Dessert|Time|Cost|
|:--:|:--:|:--:|
|Banana Split|3|7|