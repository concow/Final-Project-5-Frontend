import React, { useState, useEffect } from "react";
import Orders from './Orders';
export default function Inventory({ stock, currentUser }) {
  //   console.log(stock.company);


  return (
    <div className="inventory-component">
      <div className="stock-card">
        <h2>{stock.company}</h2>
        <h4>{stock.symbol}</h4>
        <h4>${stock.price}</h4>
        &nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </div>
  );
}



// function handleBuyOrder(quantity, order_total) {
//   fetch(`http://localhost:3000/orders`, {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify({
//       quantity: `${quantity}`,
//       order_total: `${order_total}`
//   }),
// })
//     .then((res) => res.json())
//     .then(data =>
//     console.log(data)
// setOrder([...buy, newBuyOrder]));
// setOrder(data)
// )}

//   function handleSellOrder(newSellOrder) {
//     fetch(`http://localhost3000/orders`, {
//       method: "DELETE",
//       headers: {
//         Accept: "*/*",
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify(newSellOrder),
//     })
//       .then((res) => res.json())
//       .then((json) => setSell([...sell, newSellOrder]));
//   }

// function onAddWatchlist() {}

// function updateStockList(updatedStockBought) {
//   setStocks(
//     stocks.map((ogStock) =>
//     console.log(ogStock)
// ogStock.id === updatedStockBought.id
//   ? { ...ogStock, buy: true }
//   : ogStock
//   )
// );

//  function handleSubmit(e) {
//    e.preventDefault();

//    const newChore = {
//      quantity,
//      orderTotal,
//    };
//    addOrder(newOrder);
//    setQuantity("");
//    setOrderTotal("");
//  }
// updateStockList();
// setIngredients(
//   ingredients.map((ogIngredient) =>
//     ogIngredient.recipe_id === updatedCheckedRecipe.id
//       ? { ...ogIngredient, recipe_chosen: true }
//       : ogIngredient
//   )
// );
// }
//   return (
//     <div className="stock-display">
//       <div className="stock-card">
//         <h4>{stock.company}</h4>
//         <h4>{stock.symbol}</h4>
//         <h4>${stock.price}</h4>
//         &nbsp;&nbsp;&nbsp;&nbsp;
//         <button id={stock.id} onClick={(e) => updateStockList(e.target.id)}>
//           &nbsp;&nbsp;BUY&nbsp;&nbsp;
//         </button>
//         <button id={stock.id} onClick={(e) => onAddWatchlist(e.target.id)}>
//           &nbsp;&nbsp;Watchlist&nbsp;&nbsp;
//         </button>
//       </div>
//     </div>
//   );
// }

