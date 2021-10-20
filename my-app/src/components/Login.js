import React, { useState } from 'react'
import Signup from './Signup'
// import { useHistory } from "react-router-dom";

export default function Login({ signup, login }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [signupUsername, setSignupUsername] = useState("")
    const [signupPassword, setSignupPassword] = useState("")
    const [email, setEmail] = useState("");
    const [userBalance, setUserBalance] = useState("");
    
    // const url = "http://localhost:3000.com"
    // const history = useHistory();

    // function handleLogin(e) {
    //     e.preventDefault()
    //     fetch(`${url}/users`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json",
    //         },
    //         body: JSON.stringify({user: {username, password}}),
    //     })
    //         .then((r) => r.json())
    //         .then((data) => {
    //             history.push("/home");
    //         }
    //         );
    // }
    function handleLogin(e) {
        e.preventDefault()
        login(username, password)
    }
    function handleSignup(e) {
        e.preventDefault()
        signup(username, password, email, userBalance)
    }

    return (
      <div className="login-form">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <h4>Username: </h4>
          <input
            className="login-inputs"
            type="text"
            id="username"
            placeholder=" Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <h4>Password: </h4>
          <input
            className="login-inputs"
            type="password"
            id="password"
            placeholder=" Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>

        <form className="signup-form">
          <div className="signup-title">
            <h1>Signup</h1>
          </div>
          <h4>Email: </h4>
          <input
            className="signup-inputs"
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h4>Email: </h4>
          <input
            className="signup-inputs"
            type="username"
            id="username"
            placeholder="Username"
            value={signupUsername}
            onChange={(e) => setSignupUsername(e.target.value)}
          />
          <h4>Password: </h4>
          <input
            className="signup-inputs"
            type="password"
            id="password"
            placeholder="Password"
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
          />
          <h4>User Balance: </h4>
          <input
            className="signup-inputs"
            type="username"
            id="username"
            placeholder="User Balance"
            value={userBalance}
            onChange={(e) => setUserBalance(e.target.value)}
          />
          <button type="submit">Signup</button>
        </form>
      </div>
    );
}
