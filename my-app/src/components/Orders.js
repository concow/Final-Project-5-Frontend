import React, { useState, useEffect } from "react";
import OrderList from "./OrderList";
import Portfolio from "./Portfolio";

export default function Orders({ handleAddStock, stocks }) {
 

  return (
    <div className="order-container">
      <div className="list-container">
        <h1>Current Stock Orders</h1>
        {/* {stocks.map((stocks) => console.log(stocks))} */}
        {stocks.map((stock) => (
          <OrderList
            key={stock.id}
            stock={stock}
            handleAddStock={handleAddStock}
          />
        ))}
        {/* {stocks.map((stock) => console.log(stock))} */}
        {/* {stocks.map((stock) => (
          <Portfolio key={stock.id} stock={stock}/>
        ))} */}
      </div>
    </div>
  );
}
