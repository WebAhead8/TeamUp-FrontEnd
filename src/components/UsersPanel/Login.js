import React, { useState, useEffect } from "react";
import { login, getUser } from "../../utils/fetchUsers";

function Login() {
  // States
  const [worrning, setWorrning] = useState("");
  const [loginData, setLoginData] = useState({ email: "", pass: "" });
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Storing the value each time user types in input
  const onChange = (stateKey) => ({ target }) =>
    setLoginData({ ...loginData, [stateKey]: target.value });

  // On Click "Login"
  const onSubmit = (event) => {
    event.preventDefault();

    login(loginData)
      .then((data) => {
        sessionStorage.setItem("access_token", data.access_token);
        sessionStorage.setItem("username", data.user);

        setUser(data);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        setWorrning("Email or Password are not correct");
        console.log(`HTTP error fetching login ${error}`);
      });

    if (loginData.email && loginData.pass) {
      login(loginData)
        .then((data) => {
          sessionStorage.setItem("access_token", data.access_token);
          sessionStorage.setItem("username", data.user);
          setUser(data);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          setWorrning("Email or Password are not correct");
        });
    } else {
      setWorrning("Empty fields are not allowed");
    }
  };

  useEffect(() => {
    const token = window.sessionStorage.getItem("access_token");
    if (token) {
      getUser(token)
        .then((data) => {
          setUser(data);
          setIsLoggedIn(true);
        })
        .catch((error) => {
          window.location.href = "/error";
          console.log(error);
        });
    }
  }, []);

  if (isLoggedIn) {
    window.location.href = "/profile";
  }

  return (
    <div className="login">
      <header>
        <div className="login-hdr">
          <img src="../../Assets/loginHero.svg" alt="" />
          <label>Login</label>
        </div>
      </header>
      <div className="login-form">
        <div className="container">
          <form className="form" onSubmit={onSubmit}>
            <label>Email :</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={onChange("email")}
              value={loginData.email}
            />{" "}
            <br />
            <label>Password :</label>
            <input
              type="password"
              placeholder="Password"
              name="pass"
              id="pass"
              onChange={onChange("pass")}
              value={loginData.pass}
            />
            <br />
            <i className="toto">
              Don't have an account? <a href="/signup">Sign Up</a>
            </i>
            <i className="error">{worrning}</i>
            <br />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
