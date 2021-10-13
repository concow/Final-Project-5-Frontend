# Final-Project-5-Frontend

## StockTrkr (name in progress)

StockTrkr is an application to create orders to purchase stocks to a portfolio, sell stocks 
for cash, and add interested stocks to a watchlist. I plan on using an external API from YAHOO Finance
(Loads of others to use from) as my data source for my Application.

## User Story:
  - Create and Account
  - Login/Logout
  - Create an order (trade)
  - Create a Portfolio
  - Purchase a stock (Added to Portfolio)
  - Sell a stock (Removed from Portfolio)
  - Add stocks to personal watchlist
  - Research Stock Performance in Trade component


## Model & Relationships

 <img width="1192" alt="Screen Shot 2021-10-12 at 6 48 48 PM" src="https://user-images.githubusercontent.com/41453073/137052911-82a36663-46b9-4a84-a877-8e1096e87da6.png">

## API / ROUTES

- USERS: create, show
- ORDERS: create
- PORTFOLIO: index, show, update, create
- STOCKS: index, show

## GET /api/user/:id

``{ 
  id: 1,
  username: "johnnyboy",
  email: "jobo@gmail.com",
  password_digest: "",
  user_balance: 10000
}``

## POST /api/user

``{ 
  username: "johnnyboy",
  password : "password",
  user_balance: 10000
}``

## POST /api/orders

``{ 
  quantity: 25,
  stock: Tesla,
  buy: true
}``

## GET /api/portfolio/:id

``{ 
  id: 1,
  user_id: 3,
  { include: stocks_purchased }
}``

## GET /api/stocks/:id

``{ 
  id: 45,
  company: Nvidia
  symbol: NVDA
  price: 206.71
}``

## Wireframe

<img width="571" alt="Screen Shot 2021-10-12 at 8 49 13 PM" src="https://user-images.githubusercontent.com/41453073/137064036-88da677a-79d5-4c19-bfee-a017a1b41244.png">

## Stretch Goals

-Add more intricate market performance, graphs, etc.

