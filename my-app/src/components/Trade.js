import React, { useState, useEffect } from "react";
import Inventory from "./Inventory";
import Orders from "./Orders";

export default function Trade({ currentUser, loggedIn }) {
  const [stocks, setStocks] = useState([]);
  const [order, setOrder] = useState([]);
 
  function handleAddStock(newStock) {
    // console.log("Am I in here")
    // const stockAvail = order.find((stock) => stock.id === newStock.id);
    // if (!stockAvail) {
      // console.log(setOrder)
      setOrder([...order, newStock]);
      console.log(setOrder)
    // }
  }

  useEffect(() => {
    fetch("http://localhost:3000/stocks")
      .then((response) => response.json())
      .then((stocks) => setStocks(stocks));
    //  .then((stocks) => console.log(stocks))
  }, []);

  return (
    <div className="stock-container">
      <div className="order-component">
        <Orders handleAddStock={handleAddStock} />
      </div>
      <div className="stocks">
        {/* {stocks.map((stocks) => console.log(stocks))} */}
        <h2>Stocks</h2>
        {stocks.map((stock) => (
          <Inventory
            key={stock.id}
            stock={stock}
            name={stock.company}
            symbol={stock.symbo}
            price={stock.price}
            currentUser={currentUser}
            setStocks={setStocks}
            handleAddStock={handleAddStock}
          />
        ))}
      </div>
    </div>
  );
}
