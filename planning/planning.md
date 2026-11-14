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


### Level:
TO LEVEL UP, NOW YOU MUST UNLOCK ALL UPGRADES FOR PREVIOUS FARMS, AND THEN ALSO SERVE A CERTAIN NUMBER OF CUSTOMERS 
When your shop level goes up, you're storage goes up.


You can also expand to new farms:
- Dairy Farms = Ice Cream -> Every 2 seconds you make 1 Ice cream which sells for $15
- Cocoa Farms = Chocolate -> Every 5 seconds you make 1 chocolate which sells for $50
- I'll add more farms later

You can also upgrade your farms:
- Tractors = +10% production speed
- Refinement = +2.5% income
- Organic = +5% tipping chance


### Chefs:
To produce more than one dessert at a time, you get more chefs not farms.


### Farms:
Farms give you effectively infinite materials. The upgrades above are listed for your "bakery" itself. So +10% production speed just means your banana splits get made 10% faster.

You can also buy more staff(bakers) to produce goods:
- So buying an extra baker for the banana split would produce 2 banana splits every second. 


## Tipping:
A random chance to earn 20% extra

## Storage:
- Depending on your shop level you get storage.
- You cannot hold more than your storage at a time. This includes all desserts.
- So if you only have 20 storage, and you're making 5 desserts a second and your customers will arrive in 5 seconds, you'll lose 5 desserts.
- If you're production is full, you stop making goods.
- You start w/ 20 storage slots(20 desserts)
- Storage formula: 2X each level


## Values(Planning)
|Dessert|Time|Cost|
|:--:|:--:|:--:|
|Banana Split|3|7|
|Ice Cream|2|15|
|Chocolate|5|50|
|Tart|3|40|
|Pie|5|90|


### Todo:
- Implement shop level progression -> Based on #Customers Served + shop level
- Make visuals
- Create shop frame -> Good enough for now, more for later?
- Bakers


### Farm Mapping:
"banana" = bananaSplit
"dairy" = iceCream
"cocoa" = chocolate
"fruit" = tart
"flour mill" = pie

### Adding new business/dessert:
1. Create dessert under folder in desserts(make it like dessert.ts Ex: cake.ts). Copy paste any existing dessert
2. Add new dessert type to dessert types in dessert.ts
3. Add it to dessert menu in dessert.ts
4. Create its farm by adding to farmtypes and creating it's own farm in farm.ts
5. Create its business in businessData.ts
6. Update inventory in App.tsx(invInit -> You get error anyways)
7. Update shopLevels.ts for the new reqs to get there