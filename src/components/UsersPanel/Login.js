import React, { useState, useEffect } from "react";
import { Redirect, Switch } from "react-router-dom";

function Login() {
 
  return (
    <div className="login">
        <img src="/Assets/loginHero.svg" alt="" width="161px" height="128px" />
        <label> Login</label>
      <form className="form">
        
        <label>Email :</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
        <label>Password :</label>
        <input
          type="password"
          placeholder="Password"
          name="user_pass"
          id="user_pass"
        />
        <i className="toto">
          {" "}
          Don't have an account? <a href="/signup">Sign Up</a>
        </i>
        <i className="error"></i>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;