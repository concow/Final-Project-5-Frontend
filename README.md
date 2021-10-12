# Final-Project-5-Frontend

# StockTrkr (name in progress)

# StockTrkr is an application to create orders to purchase stocks to a portfolio, sell stocks 
# for cash, and add interested stocks to a watchlist. I plan on using an external API from YAHOO Finance
# (Loads of others to use from) as my data source for my Application.

## User Story:
  - Create and Account
  - Login/Logout
  - Search/Research a Stocks YTD Performance
  - Create an order
  - Create a Portfolio
  - Purchase a stock (Added to Portfolio)
  - Sell a stock (Removed from Portfolio)
  - Add stocks to personal watchlist


## Model & Relationships

 <img width="989" alt="Screen Shot 2021-10-12 at 2 46 32 PM" src="https://user-images.githubusercontent.com/41453073/137033494-c02b924c-a9b4-4572-b8d8-b0017a15842f.png">

## API / ROUTES

- USERS: create, show
- ORDERS: create
- PORTFOLIO: index, show, update, create
- STOCKS: index, show

## GET /api/user/:id

{ 
  id: 1,
  username: "johnnyboy",
  email: "jobo@gmail.com",
  password_digest: ""
}

TBCont.
