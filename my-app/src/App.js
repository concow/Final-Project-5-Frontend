import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  NavLink,
  useHistory,
} from "react-router-dom";
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
  const [user, setUser] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();

  // const production = "https://afternoon-basin-98008.herokuapp.com";
  // const development = "http://localhost:3000"
  // const url = process.env.NODE_ENV ? production : development;

  // function setCurrentUser(currentUser) {
  //   setUser(currentUser);
  //   setLoggedIn(true);
  //   console.log(currentUser);
  // }
    // useEffect(() => {
    //   fetch("http://localhost:3000/stocks")
    //     .then((response) => response.json())
    //     .then((data) => setStocks(data), setLoggedIn(true));
    // }, []);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    console.log("token: " + token);
    fetch(`http://localhost:3000/profile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      console.log(response);
      if (response.ok) {
        response.json().then((data) => {
          setLoggedIn(true);
          setUser(data.user);
        });
      } else {
        console.log("please log in");
      }
    });
  }, []);

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
          password: `${password}`,
        },
      }),
    }).then((response) => {
      console.log(response);
      if (response.ok) {
        response.json().then((data) => {
          console.log("hi" + data.jwt);
          setUser(data.user);
          setLoggedIn(true);
          localStorage.setItem("jwt", data.jwt);
          console.log("signed in!!!!!!!!!!!!!!!!!!");
        });
      } else {
        console.log("wrong username/password");
      }
    });
  }

  function onSignup(email, username, password, user_balance) {
    fetch(`http://localhost:3000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user: {
          email: `${email}`,
          username: `${username}`,
          password: `${password}`,
          user_balance: `${user_balance}`,
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
        console.log("form incorrectly filled out");
      }
    });
  }

  function logOut() {
    setUser({});
    setLoggedIn(false);
    localStorage.token = "";
  }

  // function logOut() {
  //   localStorage.clear()
  //   setUser(null)
  //   setLoggedIn(false)
  // }

  return (
    <div className="App">
      {loggedIn ? (
        <Router>
          {/* <nav className="navbar-cont">
              <NavLink to="/">Home | </NavLink>
              <NavLink to="/trade">Trade | </NavLink>
              <NavLink to="/portfolio">Portfolio | </NavLink>
              <NavLink to="/watchlist">Watchlist</NavLink>
              <NavLink to="/signup">Signup</NavLink>
              <button className="logout" onClick={logOut}>
                Logout
              </button>
            </nav> */}
          <nav className="nav-container">
            <h2><Link className="nav-links" to="/"> Home | </Link></h2>
            <h2><Link className="nav-links" to="/trade">  Trade | </Link></h2>
            <h2><Link className="nav-links" to="/portfolio"> Portfolio | </Link></h2>
            <h2><Link className="nav-links" to="/watchlist"> Watchlist </Link></h2>
           <h2> <button className="logout-btn" onClick={logOut}>
              Logout
            </button></h2>
          </nav>
          <Switch>
            <Route exact path="/">
              <Home currentUser={user} />
            </Route>
            <Route path="/trade">
              <Trade currentUser={user} loggedIn={loggedIn}  />
            </Route>
            <Route path="/portfolio">
              <Portfolio currentUser={user} />
            </Route>
            <Route path="/login">
              <Login onLogin={onLogin}/>
            </Route>
            <Route path="/signup">
              <SignUp onSignup={onSignup}/>
            </Route>
          </Switch>
        </Router>
      ) : (
        <Login onLogin={onLogin} onSignup={onSignup} />
      )}
    </div>
  );
}
//   return (
//     <div className="main-div">
//       {loggedIn ? (
//         <h1 className="greeting-text">Welcome back {user}!</h1>
//       ) : (
//         <div className="please-log-in">
//           <h2>I'm sorry, I don't know who you are...</h2>
//           <h3>Please log in below!</h3>
//         </div>
//       )}

//       <Router>
//         <Link to="/login">Login</Link>
//         <span>---||||---</span>
//         <Link to="/signup">SignUp</Link>
//         <br />
//         {loggedIn ? (
//           <span>
//             <br />
//             <button onClick={logOut}>Log Out</button>
//           </span>
//         ) : null}
//         <br />
//         <Link to="/">Home (Click here if you are lost)</Link>
//         <br />
//         <Link to="/auth">
//           Auth Check{" "}
//           {!loggedIn
//             ? "(Works better if you're logged in!)"
//             : "(Try it now you're logged in!)"}
//         </Link>{" "}
//         <br />
//         <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>

//           <Route exact path="/login">
//             {loggedIn ? <Redirect to="/" /> : <Login onLogin={onLogin} />}
//           </Route>

//           <Route exact path="/signup">
//             {loggedIn ? <Redirect to="/" /> : <SignUp onSignUp={onSignup} />}
//           </Route>
//         </Switch>
//       </Router>
//     </div>
//   );
// }
