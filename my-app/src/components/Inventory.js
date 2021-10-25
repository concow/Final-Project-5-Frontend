import React, {useState, useEffect} from 'react';

export default function Inventory({ stock }) {
    console.log(stock.company);
    return (
      <div className="stock-display">
        &nbsp;&nbsp;
        <h4>{stock.company}</h4>
        <h4>{stock.symbol}</h4>
        <h4>${stock.price}</h4>
        &nbsp;&nbsp;&nbsp;&nbsp;
        {/* <button id={recipe.id} onClick={(e) => handleDelete(e.target.id)}>&nbsp;&nbsp;🗑&nbsp;&nbsp;</button>  */}
      </div>
    );
}
    
