import React, { useState, useEffect } from "react";

const URL = "http://localhost:3000/stocks";

export default function Trade({ loggedIn }) {
  const [stocks, setStocks] = useState([]);

  function authorizedFetch() {
    fetch(URL, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((stocks) => setStocks(stocks));
  }
    //   function getStocks(company, symbol, price) {
    //     useEffect(() => {
    //       fetch("http://localhost:3000/stocks")
    //         .then((response) => response.json())
    //         .then((stocks) => console.log(stocks))
    //         // .then((stocks) => setStocks(stocks));
    //     }, []);
    //   }
  function showFetchResponse() {
    if (stocks.length > 1) {
      return stocks.map((stock) => {
        return <span key={stock.id}>{stock.company}</span>;
      });
    } else {
      return (
        <div className="auth-taunt">
          <h2>You need authorization to click that button...</h2>
          <h3>Try all you'd like!</h3>
          {loggedIn ? (
            <h3>Oh wait...You ARE logged in! Give it a whirl!</h3>
          ) : null}
        </div>
      );
    }
  }

  return (
    <div>
      <img alt="authdemo" src="https://i.gifer.com/2Y33.gif" />
      <br />
      <br />
      <button onClick={authorizedFetch}>Click me to fetch</button>
      <br />
      <br />
      {showFetchResponse()}
      {stocks.length > 1 ? (
        <h1 className="auth-taunt">
          You successfully fetched to an Authorized Path!!
        </h1>
      ) : null}
      <br />
      <br />
    </div>
  );
}
