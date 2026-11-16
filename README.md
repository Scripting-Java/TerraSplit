# TerraSplit
Build A Dessert Empire!!!
Link: https://scripting-java.github.io/TerraSplit/

## What it's about?
TerraSplit is an idle game where you get increasingly stronger desserts to make more money and unlock even more desserts! There's a level system, customer system, and baker system!

## Features
- Industry: You start by producing banana splits, and work your way up to producing baklavas. The desserts are in no specific order that the ones I could think of.
- Production: Each business starts with a baker who produces only that dessert. You can hire more bakers to produce more of that dessert! There's some really cool production & storage allocation logic and stuff that you can check out in storage.ts!
- Upgrades: While you can't upgrade your business directly, you can upgrade the farms associated with the business to increase income, tipping chance, and production speed.
- Customers: Customers always want random items depending on their mood(simulated w/ Math.random()). Customers might demand items that you don't have a large enough supply of, and they might ignore items that you have a giant supply of.
- Storage: After you hit your storage threshold, you can't produce anymore desserts. Production is automated, so there's not much you can do about that, BUT you can strategically hire bakers...
- Art: I spent lots of time drawing w/ vectorpea so you could enjoy the dessert art. I know some of them are worse than others, but I tried :(

# Important!
I know that the game ui might seem really small, but that's because there's a lot of things you can click on.
I reccomend dragging your mouse around and looking for when it turns into a pointer to find the buttons.
I didn't hide the buttons, but the summary tag doesn't always show the arrow(a design choice)
You can click on the next level reqs & the Customer info to open up those respective info panels. 
You can also click on each business name to get the info about that businesses. 
You can also click on the farm name to open up the farm panel.
Click on each upgrade name to view that upgrade panel.
There's a purchase button for that upgrade which purchases it.
- You need to unlock & purchase a business before it starts producing desserts!!!
- You might not always sell out your stock, and sometimes you might have an excess of one type of dessert.
- You can't see your storage breakdown, but there's no specific item requirement in your storage. 
- View storage.ts for more info on the above statement.

## How to play
You start with a banana split store, a shop of level 1(only 20 storage!), and 1 baker. It's up to you to build your empire by hiring more bakers, upgrading your farms, and buying new stores.
Production & selling happen at automated intervals. Production time is listed per dessert per business so if you click on a business name -> then info, it'll show you the production time.
You can only see that info for unlocked & purchased business though. Luckily, the purchasing cost is less than the unlock cost.
To upgrade a business, click on its farms and upgrade the farms.

## Customers
- Customers arrive in a wave every 12-24 seconds
- Each customer purchases exactly one dessert
- They prefer cheaper desserts. HOWEVER, there's some algorithms involved in customer.ts that you can look into for the exact breakdown.
- Higher shop levels make customers want more expensive desserts.
- Customers can leave tips which is 20% of the dessert's cost.
- You can also upgrade that tipping chance...
- You need to serve a certain number of customers for each level.

## Shop Levels
Your shop automatically levels up when you meet the custoemr amount and purchase every upgrade for the required farm
- For example, the first level requires you to fully upgrade your banana farm & serve a 100 customers.
- Shop levels let you buy higher tier businesses
- At any shop level, you can purchase 2 businesses higher.
- For example, at level 1, you can technically unlock & purchase the chocolatier business.
- But that's pretty impractical considering with 20 storage, it would take you a long time to sell desserts to get up to that amount.
- Upgrading your shop level quadruples your storage. That's really important because 20 desserts at $7 max a dessert nets only about $140. Of course, that is for banana farm and 15*20 is a lot lot better, but still. Having more storage means that you can sell for a lot higher price.

## Storage
- All businesses share a common storage 
- This means that you can only have a total of storage desserts at a time.
- For example, at level 1, storage is set at 20, so you can only have 20 desserts at once.
- That could be 20 banana splits, 10 banana splits and 10 ice creams, or 20 ice creams.
- You can't turn off a business' production, however, there's already caps for you :) so you will always be able to produce your higher tier desserts(to a certain extent).


## Running Locally:
- Need:
  - Node.js && npm 
  - Git 

To run:
1. git clone https://github.com/Scripting-Java/TerraSplit
2. Get into that directory
3. Run npm install
4. Run npm run dev
5. Open the url(usually localhost:5173, but can differ)
6. Play the game