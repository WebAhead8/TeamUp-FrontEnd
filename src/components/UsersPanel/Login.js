import React, { useState, useEffect } from "react";
import { login, getUser } from "../../utils/fetchUsers";
function Login() {
  const [worrning, setWorrning] = useState("");
  const [loginData, setLoginData] = useState({ email: "", pass: "" });
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onChange = (stateKey) => ({ target }) =>
    setLoginData({ ...loginData, [stateKey]: target.value });
  const onSubmit = (event) => {
    event.preventDefault();

    login(loginData).then((data) => {
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("username", data.user);

      setUser(data);
      setIsLoggedIn(true);
    });

    if (loginData.email && loginData.pass) {
      login(loginData).then((data) => {
        console.log("logged as ", data);
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("username", data.user);
        setUser(data);
        setIsLoggedIn(true);
      });
    } else {
      setWorrning("Empty fields are not allowed");
    }
  };

  useEffect(() => {
    const token = window.localStorage.getItem("access_token");

    console.log("token ", token);
    if (token) {
      getUser(token)
        .then((data) => {
          console.log("Logged Again : ", data);
          setUser(data);
          setIsLoggedIn(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("access_token");

    setUser({});
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    window.location.href = "/";
  }
  return (
    <div className="login">
      <header>
        <div className="login-hdr">
          <img
            src="../../Assets/loginHero.svg"
            alt=""
            width="161px"
            height="128px"
          />
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
