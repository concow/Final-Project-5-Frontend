// export default function Extra() {
//   function onSignUp(username, password, email, userBalance) {
//     fetch(`http://localhost:3000/signup`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify({
//         user: {
//           username: `${username}`,
//           password: `${password}`,
//           email: `${email}`,
//           user_balance: `${userBalance}`,
//         },
//       }),
//     }).then((response) => {
//       if (response.ok) {
//         response.json().then((data) => {
//           setUser(data.user);
//           setLoggedIn(true);
//           localStorage.setItem("jwt", data.jwt);
//           history.push("/home");
//         });
//       } else {
//         console.log("onSignup Auth failed");
//       }
//     });
//   }

  // useEffect(() => {
  //   fetch("http://localhost:3000/stocks")
  //     .then((res) => res.json())
  //     .then((json) => setStocks(json));
  // }, []);
// }

//  function onLogin(username, password) {
//    fetch(`http://localhost:3000/login`, {
//      method: "POST",
//      headers: {
//        "Content-Type": "application/json",
//        Accept: "application/json",
//      },
//      body: JSON.stringify({
//        user: {
//          username: `${username}`,
//          password: `${password}`,
//        },
//      }),
//    }).then((response) => {
//      if (response.ok) {
//        response.json().then((data) => {
//          console.log("I'm here" + data.jwt);
//          setUser(data.user);
//          setLoggedIn(true);
//          localStorage.token = response.jwt;
//        });
//      } else {
//        console.log("onLogin Auth failed");
//      }
//    });
//  }

//   function handleSignup(e) {
//     e.preventDefault();
//     onSignup(signupUsername, signupPassword, email, userBalance);
//   }

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

  // function setCurrentUser(currentUser) {
  //   setUser(currentUser);
  //   setLoggedIn(true);
  //   console.log(currentUser);
  // }

    // function handleAddStock(newStock) {
    // console.log("Am I in here")
    // const stockAvail = order.find((stock) => stock.id === newStock.id);
    // if (!stockAvail) {
      // console.log(setOrder)
      // setOrder([...order, newStock]);
      // console.log(setOrder)
    // }
  // }