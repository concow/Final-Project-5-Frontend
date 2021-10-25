import React, { useState, useEffect } from "react";
import Inventory from "./Inventory";
const URL = "http://localhost:3000/stocks";

export default function Trade({ currentUser, loggedIn }) {
  const [stocks, setStocks] = useState([]);

  
//   function authorizedFetch() {
//     fetch(URL, {
//       headers: {
//         Authorization: `Bearer ${localStorage.token}`,
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//     })
//       .then((res) => res.json())
//     //   .then((stocks) => setStocks(stocks));
//         .then((stocks) => console.log(stocks));
//   }
//   authorizedFetch();
 

useEffect(() => {
    fetch("http://localhost:3000/stocks")
      .then((response) => response.json())
       .then((stocks) => setStocks(stocks));
        //  .then((stocks) => console.log(stocks))
}, []);

  return (
    <div className="stock-container">
      {/* <button onClick={authorizedFetch}>Click me to fetch a stock</button> */}
      <h2>Stocks</h2>
      <div className="stocks">
        {/* {stocks.map((stocks) => console.log(stocks))} */}
        {stocks.map((stock) => (
          <Inventory
            key={stock.id}
            stock={stock}
            name={stock.company}
            symbol={stock.symbo}
            price={stock.price}
            currentUser={currentUser}
          />
        ))}
      </div>
    </div>
  );
}
