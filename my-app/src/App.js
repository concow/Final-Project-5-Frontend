import logo from "./logo.svg";
import "./App.css";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   NavLink,
// } from "react-router-dom";

import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import Inventory from "./components/Inventory";
import Portfolio from "./components/Portfolio";
import Trade from "./components/Trade";
import Watchlist from "./components/Watchlist";
import { useEffect, useState } from "react";

function App() {

  // const [stocks, setStocks] = useState([]);
  // const [portfolios, setPorfolios] = useState([]);
  // const [watchlists, setWatchlists] = useState([]);
  // const [loggedIn, setLoggedIn] = useState(false);

  // const url = "https://afternoon-basin-98008.herokuapp.com/";

  // useEffect(() => {
  //   fetch(`${url}/users`)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jsSFGASDFASDFASDF</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
