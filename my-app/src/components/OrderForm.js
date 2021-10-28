import Inventory from "./Inventory"
import Trade from "./Trade"
import { useState } from "react";

export default function OrderForm({ handleAddStock, currentUser}) {
  const [quantity, setQuantity] = useState(" ");
  const [price, setPrice] = useState(" ");
  const [company, setCompany] = useState(" ");
//   const [order, setOrder] = useState(" ");

  function handleOrderSubmit(e) {
    e.preventDefault();

    const newOrder = {
      company,
      quantity,
      price,
    };
    // console.log(newOrder);
    handleAddStock(newOrder);
    setCompany(" ");
    setQuantity(" ");
    setPrice(" ");
  }

//   function handleOrderSubmit(stocks) {
//     const token = localStorage.getItem("jwt");
//     fetch(`http://localhost:3000/orders`, {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${token}`,
//         Accept: "*/*",
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify({
//           user_id: `${currentUser.id}`,
//           company: `${company}`,
//           quantity: `${quantity}`,
//           price: `${price}`
//         }),
//     })
//       .then((res) => res.json())
    //   .then((data) => console.log(data));
    //   .then((data) => setOrder([...stocks, order]));
//  }

  return (
    <div className="order-form-cont">
      <form className="order-form" onSubmit={handleOrderSubmit}>
        <h2>Initiate Order</h2>
        <div>
          <label>Company Name: </label>
          <input
            type="text"
            placeholder="Company Name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div>
          <label>Number of Shares: </label>
          <input
            type="integer"
            placeholder="Number of Shares"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div>
          <label>Price: </label>
          <input
            type="text"
            placeholder="Price"
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
