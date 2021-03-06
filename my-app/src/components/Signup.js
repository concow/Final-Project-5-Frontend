import React, { useState } from "react";

export default function Signup({ onSignup }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user_balance, setUserBalance] = useState("");

  //   const production = "https://afternoon-basin-98008.herokuapp.com/";
  //   const development = "http://localhost:3000/";
  //   const url = process.env.NODE_ENV === "production" ? production : development;

  //   console.log("process log", process.env.NODE_ENV);

  function handleSignup(e) {
    e.preventDefault();
    onSignup(email, username, password, user_balance);
  }

  return (
    <div className ="signup-form">
      <form onSubmit={handleSignup}>
        <h1>Signup</h1>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <br />
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <br />
        <input
          type="text"
          name="userbalance"
          placeholder="User Balance"
          onChange={(e) => setUserBalance(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
    // <br />
    // <div className="login-link">

    // </div>
  );
}
