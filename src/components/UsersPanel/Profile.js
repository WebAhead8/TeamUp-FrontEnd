import React, { useState, useEffect } from "react";
import { getUser } from "../../utils/fetchUsers";

function Profile() {
  const [user, setUser] = React.useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  React.useEffect(() => {
    const token = window.localStorage.getItem("access_token");

    console.log("token ", token);
    if (token) {
      getUser(token)
        .then((data) => {
          console.log("DAAAAAAAAAAAAAa ", data);
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
    window.location.href = "/landingpage";
  };
  return (
    <div className="profile">
      <div className="profile-hdr">
        <header>
          <h1>Welcome, {user.username}</h1>
          <button>
            Edit
            <img src="../../Assets/EditBtn.svg" alt="" />
          </button>
        </header>
      </div>
      <div className="user-info">
        <div className="container">
          <p>User Info</p>

          <i>First Name : {user.firstname}</i>
          <br />
          <i>Last Name : {user.lastname}</i>
          <br />
          <i>Username : {user.username}</i>
          <br />
          <i>E-Mail : {user.email}</i>
          <br />
        </div>
      </div>
      <div className="platforms">
        <p>platforms</p>

        <div className="container">
          <label>
            <img src="../../Assets/playstation.svg" alt="" />
            <input type="checkbox" name="platforms" value="ps" />
          </label>
          <label>
            <img src="../../Assets/xbox.svg" alt="" />
            <input type="checkbox" name="platforms" value="xbox" />
          </label>
          <label>
            <img src="../../Assets/pc.svg" alt="" />
            <input type="checkbox" name="platforms" value="pc" />
          </label>
          <label>
            <img src="../../Assets/mobile.svg" alt="" />
            <input type="checkbox" name="platforms" value="mobile" />
          </label>
        </div>
      </div>
      <div className="gamelist">
        <p>Games List</p>

        <div className="container">

        </div>
      </div>
      <button onClick={logout}>logout</button>
    </div>
  );
}

export default Profile;
