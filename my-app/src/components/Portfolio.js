import React, { useState, useEffect } from "react";
import PortfolioList from "./PortfolioList";

export default function Portfolio({ stocks, handleAddStock }) {
  return (
    <div className="portfolio-container">
      <h1>Portfolio</h1>
        {stocks.map((stock) => (
         <PortfolioList key={stock.id} stock={stock} handleAddStock={handleAddStock} />
        ))}
    </div>
  );
}
