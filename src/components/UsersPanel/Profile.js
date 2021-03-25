import React from "react";
import { getUser } from "../../utils/fetchUsers";

function Profile() {
  const [user, setUser] = React.useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  // Check If there is a user logged in
  React.useEffect(() => {
    const token = window.localStorage.getItem("access_token");

    console.log("token ", token);
    if (token) {
      getUser(token)
        .then((data) => {
          setUser(data);
          setIsLoggedIn(true);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      window.location.href = "/login";
    }
  }, []);

  console.log(isLoggedIn);
  // Logout Function
  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("username");

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

      <fieldset className="user-info">
        <legend>User Info</legend>
        <i>First Name: {user.firstname}</i>
        <i>Last Name: {user.lastname}</i>
        <i>Username: {user.username}</i>
        <i>E-Mail: {user.email}</i>
      </fieldset>

      <fieldset className="platforms">
        <legend>platforms</legend>

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
      </fieldset>
      <div className="gamelist">
        <p>Games List</p>

        <div className="container"></div>
      </div>
      <button onClick={logout}>logout</button>
    </div>
  );
}

export default Profile;
