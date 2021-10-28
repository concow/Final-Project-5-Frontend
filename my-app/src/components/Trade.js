import React, { useState, useEffect } from "react";
import Inventory from "./Inventory";
import OrderForm from "./OrderForm";

export default function Trade({ currentUser, handleAddStock }) {
  const [stocks, setStocks] = useState([]);
  const [order, setOrder] = useState([]);
 
  useEffect(() => {
    fetch(`http://localhost:3000/stocks`)
      .then((response) => response.json())
      .then((stocks) => setStocks(stocks));
    //  .then((stocks) => console.log(stocks))
  }, []);


  return (
    <div className="stock-container">
      <div className="order-form-trade">
        <OrderForm currentUser={currentUser} handleAddStock={handleAddStock} />
      </div>
      <h1>Stocks</h1>
      <div className="stock-inventory">
        {/* {stocks.map((stocks) => console.log(stocks))} */}
        {/* <h2>Stocks</h2> */}
        {stocks.map((stock) => (
          <Inventory
            key={stock.id}
            stock={stock}
            currentUser={currentUser}
            setStocks={setStocks}
            // company={stock.company}
            // symbol={stock.symbol}
            // price={stock.price}
            // handleAddStock={handleAddStock}
          />
        ))}
      </div>
    </div>
  );
}
