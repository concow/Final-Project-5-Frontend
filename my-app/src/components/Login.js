import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

export default function Login({ setCurrentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(event) {
    event.preventDefault();
    event.target.reset();

    const user = { username, password };

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }),
    })
      .then((r) => r.json())
      .then((response) => {
        localStorage.token = response.jwt;
        setCurrentUser(response.user);
        console.log(response.user);
      });
  }

  return (
    <div className="login-form">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <h4>Username: </h4>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <h4>Password: </h4>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
