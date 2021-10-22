import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user_balance, setUserBalance] = useState("");
  const [created, setCreated] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  //   const production = "https://afternoon-basin-98008.herokuapp.com/";
  //   const development = "http://localhost:3000/";
  //   const url = process.env.NODE_ENV === "production" ? production : development;

  console.log("process log", process.env.NODE_ENV);

  //   const history = useHistory();
  //   history.push("/home");
  function createUser(e) {
    e.preventDefault();
    e.target.reset();

    let user = {
        username,
        password,
        email,
        user_balance,
    };

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ user }),
    })
      .then((r) => r.json())
      .then((response) => {
        if (response.status === "created") {
          setCreated(true);
          setErrorMessage("");
        }
      })
      .catch((response) =>
        setErrorMessage(
          "Uh-oh! It didn't work...Make sure your server is running!"
        )
      );
  }

  return (
    <div>
      {created ? (
        <Redirect to="/login" />
      ) : (
        <div>
          <div className="please-log-in">
            <p>{errorMessage}</p>
          </div>
          <br />
          <form onSubmit={createUser}>
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
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
      )}
      <br />
      <br />
    </div>
  );
}
