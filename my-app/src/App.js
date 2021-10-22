import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect, Link, NavLink, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Trade from "./components/Trade";
import Inventory from "./components/Inventory";
import Watchlist from "./components/Watchlist";

export default function App() {
  const [stocks, setStocks] = useState([]);
  const [portfolios, setPorfolios] = useState([]);
  const [watchlists, setWatchlists] = useState([]);
  const [user, setUser] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();

  // const production = "https://afternoon-basin-98008.herokuapp.com";
  // const development = "http://localhost:3000/"
  // const url = process.env.NODE_ENV ? production : development;

  function setCurrentUser(currentUser) {
    setUser(currentUser);
    setLoggedIn(true);
    console.log(currentUser)
  }

  function logOut() {
    setUser({});
    setLoggedIn(false);
    localStorage.token = "";
  }

  useEffect(() => {
    const token = localStorage.token;
    console.log("token " + token);
    if (
      typeof token !== "undefined" &&
      token.length > 1 &&
      token !== "undefined"
    ) {
      fetch("http://localhost:3000/auto_login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      })
        .then((r) => r.json())
        // .then((user) => setCurrentUser(user));
        .then((user) => setUser(user),setLoggedIn(true));

    } else {
      console.log("No token found, try logging in!");
    }
  }, []);

//   return (
//     <div className="App">
//       {loggedIn ? (
//         <Router>
//           <nav className="navbar-cont">
//             <NavLink to="/">Home | </NavLink>
//             <NavLink to="/trade">Trade | </NavLink>
//             <NavLink to="/portfolio">Portfolio | </NavLink>
//             <NavLink to="/watchlist">Watchlist</NavLink>
//             <NavLink to="/signup">Signup</NavLink>
//           </nav>
//           <Switch>
//             <Route exact path="/">
//               <Home />
//             </Route>
//             <Route path="/trade">
//               <Trade />
//             </Route>
//             <Route path="/portfolio">
//               <Portfolio />
//             </Route>
//             <Route path="/signup">
//               <SignUp />
//             </Route>
//           </Switch>
//         </Router>
//       ) : (
//         <Login setCurrentUser={setCurrentUser} />
//       )}
//     </div>
//   );
// }
  return (
    <div className="main-div">
      {loggedIn ? (
        <h1 className="greeting-text">Welcome back {user}!</h1>
      ) : (
        <div className="please-log-in">
          <h2>I'm sorry, I don't know who you are...</h2>
          <h3>Please log in below!</h3>
        </div>
      )}

      <Router>
        <Link to="/login">Login</Link>
        <span>---||||---</span>
        <Link to="/signup">SignUp</Link>
        <br />
        {loggedIn ? (
          <span>
            <br />
            <button onClick={logOut}>Log Out</button>
          </span>
        ) : null}
        <br />
        <Link to="/">Home (Click here if you are lost)</Link>
        <br />
        <Link to="/auth">
          Auth Check{' '}
          {!loggedIn
            ? "(Works better if you're logged in!)"
            : "(Try it now you're logged in!)"}
        </Link>{' '}
        <br />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/login">
            {loggedIn ? (
              <Redirect to="/" />
            ) : (
              <Login setCurrentUser={setCurrentUser} />
            )}
          </Route>

          <Route exact path="/signup">
            {loggedIn ? <Redirect to="/" /> : <SignUp />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}