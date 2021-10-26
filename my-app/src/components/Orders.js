import Inventory from "./Inventory";
import React, { useState, useEffect } from "react";

export default function Orders({ onOrderSubmit, handleAddStock }) {
  const [order, setOrder] = useState([]);
  const [sell, setSell] = useState([]);
  const [quantity, setQuantity] = useState(" ");
  const [price, setPrice] = useState(" ");
  const [company, setCompany] = useState(" ");

  function onOrderSubmit(e) {
    e.preventDefault();

    const newStockOrder = {
      company,
      quantity,
      price,
    };
    console.log(newStockOrder);
    handleAddStock(newStockOrder);
    setCompany(" ");
    setQuantity(" ");
    setPrice(" ");
  }

  return (
    <div className="order-form">
      <form className="order-form" onSubmit={onOrderSubmit}>
        <h2>Initiate Order</h2>
        <div>
          <label>Company Name: </label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div>
          <label>Number of Shares: </label>
          <input
            type="integer"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div>
          <label>Price: </label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <br></br>
        <button className="buy-button" type="submit">
          Add to Order
        </button>
      </form>
    </div>
  );
}
