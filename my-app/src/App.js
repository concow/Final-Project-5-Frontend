import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import Inventory from "./components/Inventory";
import Portfolio from "./components/Portfolio";
import Trade from "./components/Trade";
import Watchlist from "./components/Watchlist";
import { useEffect, useState } from "react";

function App() {

  const [stocks, setStocks] = useState([]);
  const [portfolios, setPorfolios] = useState([]);
  const [watchlists, setWatchlists] = useState([]);

  const [user, setUser] = useState(false)
  const [isLoggedIn, setLoggedIn] = useState(false);

  // const production = "https://afternoon-basin-98008.herokuapp.com";
  // const development = "http://localhost:3000/"
  // const url = process.env.NODE_ENV ? production : development;
  
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    console.log("token here => " + token)
      fetch(`http://localhost:3000/profile`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            setLoggedIn(true);
            setUser(data.user);
          });
        } else {
          console.log("Must Log In");
        }
      });
      }, 
  []);

  function onSignUp(username, password, email, userBalance) {
    fetch(`http://localhost:3000/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user: {
          username: `${username}`,
          password: `${password}`,
          email: `${email}`,
          user_balance: `${userBalance}`,
        },
      }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setUser(data.user);
          setLoggedIn(true);
          localStorage.setItem("jwt", data.jwt);
        });
      } else {
        console.log("Incomplete Form.");
      }
    });
  }

  function onLogin(username, password) {
      fetch(`http://localhost:3000/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user: {
          username: `${username}`,
          password: `${password}`
        }
      })
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          console.log( "I'm here" + data.jwt )
          setUser(data.user)
          setLoggedIn(true)
          localStorage.setItem("jwt", data.jwt);
        });
      } else {
        console.log("dsafdsfdsa;f")
      }
    });
  }

    function handleLogin(currentUser) {
      setUser(currentUser);
      setLoggedIn(true);
    }

     function handleLogout() {
       localStorage.clear();
       setUser(null);
       setLoggedIn(false);
     }


  return (
 

  <div className="App">
       {isLoggedIn ?
    <Router>
      <nav className="navbar-cont">
          <NavLink to="/">Home | </NavLink>
          <NavLink to="/trade">Trade | </NavLink>
          <NavLink to="/portfolio">Portfolio | </NavLink>
          <NavLink to="/watchlist">Watchlist</NavLink>
      </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/trade" component={Trade} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
    </Router> :
        // <Signup onSignUp={onSignUp}/>
        <Login onSignUp={onSignUp} onLogin={onLogin}/>
       }
  </div>
  )
}


export default App;
