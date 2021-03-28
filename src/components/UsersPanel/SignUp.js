import React, { useState, useEffect } from "react";
import { createUser } from "../../utils/fetchUsers";

function SignUp() {
  const [signup, setSignup] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: " ",
    pass: "",
    pass2: "",
  });
  const [worrning, setWorrning] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("access_token");

    console.log("token ", token);
    if (token) {
      window.location.href = "/";
    }
  }, []);

  function handelClick(e) {
    e.preventDefault();

    if (signup.pass2 === signup.pass) {
      setWorrning("");
      createUser(signup);
      window.location.href = "/login";
    } else {
      setWorrning("Passwords Must Match");
    }
  }
  function handelChange(event) {
    const { name, value } = event.target;
    setSignup((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <div className="login">
      <header>
        <div className="login-hdr">
          <img src="../../Assets/signHero.svg" alt="" />
          <label> Sign Up</label>
        </div>
      </header>
      <div className="login-form">
        <div className="container">
          <form onSubmit={handelClick} className="form">
            <div className="user-hdr">
              <label className="names">
                First Name : <br />
                <input
                  type="text"
                  placeholder="firstname"
                  name="firstname"
                  minlength="3"
                  maxlength="20"
                  onChange={handelChange}
                  required
                />
              </label>
              <br />
              <label className="names">
                Last Name : <br />
                <input
                  type="text"
                  placeholder="lastname"
                  name="lastname"
                  minlength="3"
                  maxlength="20"
                  onChange={handelChange}
                  required
                />
              </label>
            </div>

            <label>Username :</label>
            <input
              type="text"
              placeholder="username"
              name="username"
              minlength="3"
              maxlength="20"
              onChange={handelChange}
              required
            />
            <label>Email :</label>
            <input
              type="email"
              placeholder="Email"
              onChange={handelChange}
              name="email"
              required
            />
            <label>Password :</label>
            <input
              type="password"
              placeholder="Password"
              name="pass"
              onChange={handelChange}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
              required
            />

            <label>Confirm Password :</label>
            <input
              type="password"
              placeholder="Confirm Password"
              name="pass2"
              onChange={handelChange}
              required
            />
            <i className="toto">
              {" "}
              Already have an account? <a href="/login"> Login </a>{" "}
            </i>
            <output className="error">{worrning}</output>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
