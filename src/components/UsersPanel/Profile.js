import React from "react";
import { getUser, updateUser } from "../../utils/fetchUsers";
import DataList from "../DataList";
import UsersPost from "./UsersPost";
import DeleteAccount from "./Popups/DeleteAccount";
import Edit from "./Popups/Edit";
import EditEmail from "./Popups/EditEmail";
import EditPassword from "./Popups/EditPassword";
import EditUsername from "./Popups/EditUsername";

function Profile() {
  const [user, setUser] = React.useState({});
  const [games, setGames] = React.useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [trigger, setTrigger] = React.useState(false);
  const [triggerEmail, setTriggerEmail] = React.useState(false);
  const [triggerPass, setTriggerPass] = React.useState(false);
  const [triggerUsername, setTriggerUsername] = React.useState(false);
  const [triggerDelete, setTriggerDelete] = React.useState(false);
  const [isXboxChecked, setIsXboxChecked] = React.useState({
    xbox: false,
    ps: false,
    mobile: false,
    pc: false,
  });

  // Check If there is a user logged in
  React.useEffect(() => {
    const token = window.localStorage.getItem("access_token");

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
  }, [user]);

  // Update platforms when check or uncheck a box
  function updatePlatforms(plat) {
    if (user.platform) {
      if (!user.platform.includes(plat)) {
        user.platform.push(plat);
      } else {
        const index = user.platform.indexOf(plat);
        user.platform.splice(index, 1);
      }
    }
    const url = "platforms";

    updateUser(url, { id: user.id, platform: user.platform })
      .then((data) => console.log("platform ", data))
      .catch((error) => {
        console.log(error);
      });
  }

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
          <button
            onClick={() => {
              setTrigger(!trigger);
              setTriggerUsername(false);
              setTriggerEmail(false);
              setTriggerPass(false);
              setTriggerDelete(false);
            }}
          >
            <img src="../../Assets/EditBtn.svg" alt="" />
          </button>
        </header>
      </div>

      <Edit trigger={trigger} setTrigger={setTrigger}>
        <h1>Edit Your Info</h1>
        <a
          onClick={() => {
            setTriggerEmail(true);
            setTrigger(false);
          }}
        >
          Edit Your Email
        </a>
        <a
          onClick={() => {
            setTriggerPass(true);
            setTrigger(false);
          }}
        >
          Edit Your Password
        </a>
        <a
          onClick={() => {
            setTriggerUsername(true);
            setTrigger(false);
          }}
        >
          Edit Your Username
        </a>
        <a
          className="del-account"
          onClick={() => {
            setTriggerDelete(true);
            setTrigger(false);
          }}
        >
          Delete Your Account
        </a>
      </Edit>

      <EditEmail
        triggerEmail={triggerEmail}
        setTriggerEmail={setTriggerEmail}
        setTrigger={setTrigger}
        userId={user.id}
      />
      <EditPassword
        triggerPass={triggerPass}
        setTriggerPass={setTriggerPass}
        setTrigger={setTrigger}
        userId={user.id}
      />
      <EditUsername
        triggerUsername={triggerUsername}
        setTriggerUsername={setTriggerUsername}
        setTrigger={setTrigger}
        userId={user.id}
      />
      <DeleteAccount
        triggerDelete={triggerDelete}
        setTriggerDelete={setTriggerDelete}
        setTrigger={setTrigger}
        id={user.id}
      />

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
          {/* Playstation */}
          <label>
            <img src="../../Assets/playstation.svg" alt="" />
            {user.platform ? (
              user.platform.includes("ps") ? (
                <input
                  type="checkbox"
                  name="platforms"
                  value="ps"
                  checked={true}
                  onChange={(e) => updatePlatforms(e.target.value)}
                />
              ) : (
                <input
                  type="checkbox"
                  name="platforms"
                  value="ps"
                  checked={false}
                  onChange={(e) => updatePlatforms(e.target.value)}
                />
              )
            ) : (
              ""
            )}
          </label>
          <label>
            {/* Xbox */}
            <img src="../../Assets/xbox.svg" alt="" />
            {user.platform ? (
              user.platform.includes("xbox") ? (
                <input
                  type="checkbox"
                  name="platforms"
                  value="xbox"
                  checked={true}
                  onChange={(e) => updatePlatforms(e.target.value)}
                />
              ) : (
                <input
                  type="checkbox"
                  name="platforms"
                  value="xbox"
                  checked={false}
                  onChange={(e) => updatePlatforms(e.target.value)}
                />
              )
            ) : (
              ""
            )}
          </label>
          <label>
            {/* PC */}
            <img src="../../Assets/pc.svg" alt="" />
            {user.platform ? (
              user.platform.includes("pc") ? (
                <input
                  type="checkbox"
                  name="platforms"
                  value="pc"
                  checked={true}
                  onChange={(e) => updatePlatforms(e.target.value)}
                />
              ) : (
                <input
                  type="checkbox"
                  name="platforms"
                  value="pc"
                  checked={false}
                  onChange={(e) => updatePlatforms(e.target.value)}
                />
              )
            ) : (
              ""
            )}
          </label>
          <label>
            <img src="../../Assets/mobile.svg" alt="" />
            {user.platform ? (
              user.platform.includes("mobile") ? (
                <input
                  type="checkbox"
                  name="platforms"
                  value="mobile"
                  checked={true}
                  onChange={(e) => updatePlatforms(e.target.value)}
                />
              ) : (
                <input
                  type="checkbox"
                  name="platforms"
                  value="mobile"
                  checked={false}
                  onChange={(e) => updatePlatforms(e.target.value)}
                />
              )
            ) : (
              ""
            )}
          </label>
        </div>
      </fieldset>
      <fieldset className="gamelist">
        <label>
          Add New Game : <br />
          <DataList user={user} />
        </label>
        {/* <input type="button" value="Add" className="add-game" /> */}
        <legend> Games List</legend>
        {user.gamelist ? (
          <ul>
            {user.gamelist.map((game) => (
              <li className="gameName" key={game.id}>
                {game}
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </fieldset>

      <fieldset className="posts">
        <legend>My Posts :</legend>
      </fieldset>
      <UsersPost user={user} />
      <button onClick={logout}>logout</button>
    </div>
  );
}

export default Profile;
